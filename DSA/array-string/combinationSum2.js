function combinationSum2(candidates, target) {
	if (candidates.length === 0) return [];
	let ans = [];
	candidates.sort((a, b) => a - b);
	let n = candidates.length;
	dfs(candidates, n, target, [], 0);
	return ans;

	function dfs(arr, n, target, combine, start) {
		if (target === 0) {
			ans.push(combine.slice());
			return;
		}
		for (let i = start; i < n; i++) {
			if (target < arr[i]) break;
			if (i > start && arr[i] === arr[i - 1]) continue;
			combine.push(arr[i]);
			dfs(arr, n, target - arr[i], combine, i + 1);
			combine.pop();
		}
	}
}
	
let arr = [9, 16, 2, 18, 9, 8, 10];
console.log(`The given array is : ${arr}`);
let target = 18;
console.log(`the target is : ${target} `);
let result = combinationSum2(arr, target);
console.log(`The sum of combinations in a array :`);
console.log(result);
