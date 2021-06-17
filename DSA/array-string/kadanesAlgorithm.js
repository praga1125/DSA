//program sum of maximum sub array  implementation using kadane's algorithm...
function maximumSubArray(arr) {
	let result = -Infinity;
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		max += arr[i];
		if (result < max) result = max;
		if (max < 0) max = 0;
	}
	return result;
}

let arr = [2];
console.log(`The given array is : ${arr}`);
let result = maximumSubArray(arr);
console.log(`The sum of maximum sub array : ${result}`);
