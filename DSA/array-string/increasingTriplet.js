function increasingTriplet(nums) {
	let first = Infinity;
	let second = Infinity;
	for (let num of nums) {
		if (num <= first) {
			first = num;
		} else if (num <= second) {
			second = num;
		} else {
			return true;
		}
	}
	return false;
}

let arr = [1, 2, 10, 5, 2];
console.log(`The given array is :`);
console.log(arr);
let result = increasingTriplet(arr);
if (result) {
	console.log(`It is increasing triplet Subsequence`);
} else {
	console.log(`It is not a increasing triplet Subsequence`);
}
