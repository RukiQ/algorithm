function bubbleSort(arr) {

	var j = arr.length;

	while (j > 0) {
		for (var i=0; i<j-1; i++) {
			if (arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
		}
		j--;
	}
	
	return arr;
}