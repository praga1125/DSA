function nextPermutation(nums) {
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			let large = nextLarge(i);
			swap(i, large);
			reverse(i + 1);
			return nums;
		}
	}
	function nextLarge(index) {
		for (let i = nums.length - 1; i >= 0; i--) {
			if (nums[i] > nums[index]) {
				return i;
			}
		}
	}

	function swap(v1, v2) {
		[nums[v1], nums[v2]] = [nums[v2], nums[v1]];
	}

	function reverse(index) {
		let start = index,
			end = nums.length - 1;
		while (start < end) {
			swap(start, end);
			start++;
			end--;
		}
	}
}

let arr = [6, 2, 1, 5, 4, 3, 0];
console.log(`The given array is : ${arr}`);
let result = nextPermutation(arr);
if (result == undefined) {
	console.log(`There is no next permutation`);
} else {
	console.log(`The next permutation is : ${result}`);
}
