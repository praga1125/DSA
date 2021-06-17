function combinationSum(nums, target) {
	const result = [];
	const dfs = (i, arr, target, stack) => {
		if (target < 0) return; // backtrack case
		if (target === 0) {
			result.push(stack.slice()); 
			return;
		}
		for (let j = i; j < arr.length; j++) {  // dfs
			stack.push(arr[j]);
			dfs(j, arr, target - arr[j], stack);
			stack.pop();
		}
	};
	dfs(0, nums, target, []);
	return result;
}

let arr = [2, 3, 6, 7];
console.log(`The given array is : ${arr}`);
let target = 7;
console.log(`The target element is : ${target}`);
let result = combinationSum(arr, target);
console.log(`The combination of sum elements :`);
console.log(result);
