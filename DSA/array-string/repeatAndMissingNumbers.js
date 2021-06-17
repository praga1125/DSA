function repeatedNumber(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[Math.abs(arr[i]) - 1] > 0) {
			arr[Math.abs(arr[i]) - 1] = -arr[Math.abs(arr[i]) - 1];
		} else {
			result.push(Math.abs(arr[i]));
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) result.push(i + 1);
	}
	return result;
}

let arr = [4, 3, 5, 3, 1];
console.log(`The given array is : ${arr}`);
let result = repeatedNumber(arr);
console.log(`The repeated number is : ${result[0]}`);
console.log(`The missing number is : ${result[1]}`);
