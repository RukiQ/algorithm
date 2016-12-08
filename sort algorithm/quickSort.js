function quickSort(arr) {

	// 这步判断很重要，因为递归，每次分治时都要判断
	// 并且不能将arr.length缓存成变量len，因为取pivot的时候用splice会把数组长度减1
	if (arr.length <= 1) return arr;

	var mid = Math.floor(arr.length / 2),	// 取得中间元素的索引
		pivot = arr.splice(mid, 1)[0],	// 以中间元素为基准元素，arr.splice()返回数组
		left = [],	// 用于存放比pivot小的元素
		right = [];	// 用于存放个比pivot大的元素

	for (var i=0; i<arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat([pivot], quickSort(right));
}
