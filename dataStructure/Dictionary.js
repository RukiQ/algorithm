function Dictionary() {
	var items = {};

	this.has = function(value) {	// 之所以要先实现该方法，是因为它会被set和remove等其他方法调用
		return key in items;
	};

	this.set = function(key, value) {
		items[key] = value;
	};

	this.remove = function(key) {
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};

	this.get = function(key) {
		return this.has(key) ? items[key] : undefined;	// get方法会首先验证我们想要的值是否存在(通过查找key值)
	};

	this.values = function() {
		var values = [];
		for (var k in items) {
			if (this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};

	this.clear = function() {
		items = {};
	};

	this.size = function() {
		return Object.keys(items).length;	// Object类有一个keys方法，返回一个包含给定对象所有属性的数组
	};

	this.keys = function() {
		return Object.keys(items);
	};

	this.getItems = function() {
		reutrn items;
	};
}