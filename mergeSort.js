function mergeSort(arr1, arr2) {
	var begin1 = 0,	// arr1比较数据的索引，会依次递增
		begin2 = 0,	// arr2比较数据的索引，会依次递增
		end1 = arr1.length,	
		end2 = arr2.length,
		arr3 = [];

	// 当比较的索引都没有到数组末尾的时候，循环比较
	while (begin1 < end1 && begin2 < end2) {
		if (arr1[begin1] < arr2[begin2]) {
			arr3.push(arr1[begin1++]);
		} else if (arr1[begin1] > arr2[begin2]) {
			arr3.push(arr2[begin2++]);
		} else {	// 相等的情况，都要push和索引递增
			arr3.push(arr1[begin1++]);
			arr3.push(arr2[begin2++]);
		}
	}
	// 当arr1未到数组末尾时，将剩余数据push
	if (begin1 < end1) {
		for (var i=begin1; i<end1; i++) {
			arr3.push(arr1[i]);
		}
	}
	// 当arr2未到数组末尾时，将剩余数据push
	if (begin2 < end2) {
		for (var j=begin2; j<end2; j++) {
			arr3.push(arr2[j]);
		}
	}

	return arr3;
}
