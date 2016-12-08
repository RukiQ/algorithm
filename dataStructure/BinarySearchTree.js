function BinarySearchTree() {
	// 辅助类Node定义
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
	var root = null;

	// 向树中插入一个新的键
	this.insert = function(key) {
		var newNode = new Node(key);

		if (root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);	// 私有的辅助函数
		}
	}

	this.insertNode = function(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);	// 如果有左侧子节点，则通过递归调用继续找到树的下一层
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode); // 如果有右侧子节点，则通过递归调用继续找到树的下一层
			}
		}
	}

	/* 中序遍历
	 * inOrderTraverse方法接收一个回调函数作为参数。
	 * 回调函数用来定义我们对遍历到的每个节点进行的操作（也叫访问者模式)
	*/
	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	}

	this.inOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	}

	// 先序遍历
	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback);
	}

	this.preOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	}

	// 后序遍历
	this.postOrderTraverse = function(allback) {
		postOrderTraverseNode(root, callback);
	}

	this.postOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	// 搜索树中的最小值
	this.min = function() {
		return minNode(root);
	}

	var minNode = function(node) {
		if (node) {
			while (node && node.left !== null) {
				node = node.lfet;
			}
			return node.key;
		}
		return null;
	}

	// 搜索树中的最大值
	this.max = function() {
		return maxNode(root);
	}

	this.maxNode = function(node) {
		if (node) {
			while (node && node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
		return null;
	}

	// 搜索树中的特定值
	this.search = function(key) {
		return searchNode(root, key);
	}

	var searchNode = function(node, key) {
		if (node === null) {
			return false;
		}
		if (key < node.key) {
			return searchNode(node.left ,key);
		} else if (key > node.key) {
			return searchNode(node.right, key);
		} else {
			return true;
		}
	}

	// 从树中移除某个键
	this.remove = function(key) {
		root = removeNode(root, key);	// root被赋值为removeNode方法的返回值
	}

	var removeNode = function(node, key) {
		if (node === null) {	// 键不存在于树中，则返回null
			return null;
		}
		if (key < node.key) {	// 如果要找的键比当前节点的值小，就沿着树的左边找到下一个节点
			node.left = removeNode(node.left, key);
			return node;
		} else if (key > node.key) { // 如果要找的键比当前节点的值大，就沿着树的左边找到下一个节点
			node.right = removeNode(node.right, key);
			return node;
		} else {	// 键等于node.key

			// 第一种情况——一个叶节点
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}

			// 第二种情况——一个只有一个子节点的节点
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			// 第三种情况——一个有两个子节点的节点
			var aux = findMinNode(node.right);	
			node.key = aux.key;	// 用右侧子树中的最小节点的键去更新这个节点的值
			node.right = removeNode(node.right, aux.key);	// 移除右侧子树中的最小节点
			return node;
		}
	}
}