function Set() {
	var items = {};

	/*this.has = function(value) {
		return value in items;		// in 操作符会在通过对象访问给定属性时返回true，无论该属性存在于实例中还是原型中
	}*/

	// better way
	this.has = function(value) {
		return items.hasOwnProperty(value);	// hasOwnProperty()方法只在给定属性存在于对象实例中时，才会返回true
	};

	this.add = function(value) {
		if (!this.has(value)) {
			items[value] = value;	//添加一个值的时候，把它同时作为键和值保存，因为这样有利于查找这个值
			reutrn true;	// 返回true，表示添加了这个值
		}
		return false;	// 返回false，表示没有添加它
	};

	this.remove = function(value) {
		if (this.has(value)) {
			delete items[value];	// 既然用对象来存储集合的items对象，就可以简单地使用delete操作符从items对象中移除属性
			return true;
		}
		return false;
	};

	this.clear = function() {
		items = {};
	};

	// size实现方法一(只能在现代浏览器中运行)
	/*this.size = function() {
		return Object.keys(items).length;	// Object类有一个keys方法，返回一个包含给定对象所有属性的数组
	}*/

	// size实现方法二(可以在任何浏览器上运行)
	this.size = function() {
		var count = 0;
		for (var prop in items) {	// for...in...用于枚举对象中的属性，包括实例和原型中的属性
			if (items.hasOwnProperty(prop)) {	// 检查它们是否是对象自身的属性
				++count;
			}
		}
		return count;
	};

	// values实现方法一，同size实现方法一
	/*this.values = function() {
		return Object.keys(items);
	}*/

	// values实现方法二，同size实现方法二
	this.values = function() {
		var keys = [];
		for (var key in items) {
			keys.push(key);
		}
		return keys;
	};
}