let arr = [1, 2, 3, 4, 5];
let len = arr.length;
function rotate(arr, n) {
	let temp = arr[n - 1];
	for (let i = len - 1; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = temp;
}

console.log(`The given array is : `);
console.log(arr);
rotate(arr, len);
console.log(`The rotated array is : `);
console.log(arr);
