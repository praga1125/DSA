function maxSlidingWindow(nums, k) {
	let ans = [],
		windowStart = 0,
		window = [];
	for (let i = 0; i < nums.length; i++) {
		while (
			window[windowStart] !== undefined &&
			nums[window[window.length - 1]] <= nums[i]
		) {
			window.pop();
		}
		window.push(i);
		if (i - window[windowStart] === k) {
			windowStart++;
		}
		if (i >= k - 1) {
			ans.push(nums[window[windowStart]]);
		}
	}
	return ans;
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(`The given array is : `);
console.log(arr);
let limit = 4;
console.log(`The given window limit is : ${limit}`);
let result = maxSlidingWindow(arr, limit);
console.log(`The maximum value of  sliding window is : `);
console.log(result);
