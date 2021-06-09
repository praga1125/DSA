function sorted(arr) {
	let low = 0,
		  high = arr.length - 1,
		  mid = 0;
	while (mid <= high) {
		if (arr[mid] == 0) {
			[arr[low], arr[mid]] = [arr[mid], arr[low]];
			low++;
			mid++;
		} else if (arr[mid] == 1) {
			mid++;
		} else {
			[arr[mid], arr[high]] = [arr[high], arr[mid]];
			high--;
		}
	}
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(`The given array is : ${arr}`);
sorted(arr);
console.log(`The sorted array is : ${arr}`);
