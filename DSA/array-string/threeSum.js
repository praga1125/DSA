let threeSum = (nums) => {
	nums.sort((a, b) => a - b);
	let triplets = [];
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) continue;
		findPair(nums, -nums[i], i + 1, triplets);
	}
	return triplets;
};

const findPair = (arr, target, left, triplets) => {
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === target) {
			triplets.push([-target, arr[left], arr[right]]);
			left += 1;
			right -= 1;
			while (left < right && arr[left] === arr[left - 1]) left += 1;
			while (left < right && arr[right] === arr[right + 1]) right -= 1;
		} else if (sum < target) {
			left += 1;
		} else {
			right -= 1;
		}
	}
};

let arr = [-1, 0, 2, 2, -1, -4];
console.log(`The given array is : [${arr}]`);
let result = threeSum(arr);
console.log(`The three sum of values :`);
console.log(result);
