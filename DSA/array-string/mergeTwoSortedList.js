function mergeSortList(arr1, m, arr2, n) {
	let i = m - 1,
		j = n - 1,
		k = m + n - 1;
	while (i >= 0 && j >= 0) {
		if (arr1[i] >= arr2[j]) {
			arr1[k] = arr1[i];
			i--;
		} else {
			arr1[k] = arr2[j];
			j--;
		}
		k--;
	}

	while (j >= 0) {
		arr1[k] = arr2[j];
		k--;
		j--;
	}
	return arr1;
}

let arr1 = [1, 2, 3, 0, 0, 0];
console.log(`The given array 1 is : [${arr1}]`);
let arr2 = [5, 6, 7];
console.log(`The given array 2 is : [${arr2}]`);
let m = 3,
	n = 3;
let result = mergeSortList(arr1, m, arr2, n);
console.log(`The merged sorted list is : [${result}] `);
