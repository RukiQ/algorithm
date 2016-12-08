function HashTable() {
	var table = [];

	// 散列函数，是HashTable中的一个私有方法
	var loseloseHashCode = function(key) {
		var hash = 0;
		for (var i=0; i<key.length; i++) {
			hash += key.charCodeAt(i);		// 给定一个key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字
		}
		return hash % 37;	// 为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数
	};

	// 更好的散列函数(这并不是最好的散列函数，但这是最被社区推荐的散列函数之一)
	var djb2HashCode = function(key) {
		var hash = 5381;	// 初始化赋值为一个质数，大多数实现都使用5318
		for (var i=0; i<key.length; i++) {
			hash += hash * 33 + key.charCodeAt(i);	// 将hash与33相乘，当作一个魔力数
		}
		return hash % 1013;	// 将相加的和与另一个随机质数相除
	}

	this.put = function(key, value) {
		var position = loseloseHashCode(key);	// 给定一个键值，我们需要根据所创建的散列函数计算出它在表中的位置
		table[position] = value;	// 将value参数添加到用散列函数计算出的对应的位置上
	};

	this.get = function(key) {
		return table[loseloseHashCode(key)];	//loseloseHashCode(key)会返回值的位置
	};

	this.remove = function(key) {
		table[loseloseHashCode(key)] = undefined;
	};


	/*解决冲突方法一：分离链接*/

	// 为了实现一个使用了分离链接的HashTable实例，我们需要一个新的辅助类来表示将要加入LinkedList实例的元素
	var ValuePair = function(key, value) {
		this.key = key;
		this.value = value;
	}

	// 分离链接：重写put方法
	this.put = function(key, value) {
		var position = loseloseHashCode(key);
		// 如果这个位置是第一次被加入元素，我们会在这个位置上初始化一个LinkedList类的实例
		if (table[position] == undefined) {		
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key, value));
	}

	// 分离链接：重写get方法
	this.get = function(key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {

			//遍历链表来寻找键/值
			var current = table[position].getHead();

			while (current.next) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}

			// 检查元素在链表第一个或最后一个节点的情况
			if (current.element.key === key) {
				return current.element.value;
			}
		}
		return undefined;
	}

	// 分离链接：重写remove方法
	this.remove = function(key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {

			var current = table[position].getHead();
			while (current.next) {
				if (current.element.key === key) {
					table[position].remove(current.element);
					if (table[position].isEmpty()) {
						table[position] = undefined;
					}
					return true;
				}
				current = current.next;
			}

			// 检查是否为第一个或最后一个元素
			if (current.element.key === key) {
				table[position].remove(current.element);
				if (table[position].isEmpty()) {
					table[position] = undefined;
				}
				return true;	// 返回true表示这个元素已经被移除
			}
		}

		return false;	// 返回false表示这个元素在散列表中不存在
	}



	/*解决冲突方法二：线性探查*/
	var ValuePair = function(key, value) {
		this.key = key;
		this.value = value;
	}

	// 线性探查：重写put方法
	this.put = function(key, value) {
		var position = loseloseHashCode(key);
		
		if (table[position] == undefined) {
			table[position] = new ValuePair(key, value);
		} else {
			var index = ++position;
			while (table[index] != undefined) {
				index++;
			}
			table[index] = new ValuePair(key, value);
		}
	}

	// 线性探查：重写get方法
	this.get = function(key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {
			if (table[position].key === key) {
				return table[position].value;
			} else {
				var index = ++position;
				while (table[index] === undefined || table[index].key !== key) {
					index++;
				}
				if (table[index].key === key) {	//只是为了确认一下
					return table[index].value;
				}
			}
		}
		return undefined;
	}

	// 分离链接：重写remove方法
	this.remove = function(key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {
			if (table[position].key === key) {
				table[index] = undefined;
			} else {
				var index = ++position;
				while (table[index] === undefined || table[index].key !== key) {
					index++;
				}
				if (table[index].key === key) {	//只是为了确认一下
					table[index] = undefined;
				}
			}
		}
		return undefined;
	}
}