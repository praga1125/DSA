const permutation = function (nums) {
	if (nums === null) {
		return [];
	}

	const res = [];
	const visited = new Array(nums.length).fill(false);
	nums.sort((a, b) => a - b);

	function backtrack(permutations) {
		if (permutations.length === nums.length) {
			res.push(permutations.slice(0));
		}

		for (let i = 0; i < nums.length; i++) {
			if (visited[i]) {
				continue;
			}
			if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
				continue;
			}
			visited[i] = true;
			permutations.push(nums[i]);
			backtrack(permutations, i + 1);
			visited[i] = false;
			permutations.pop();
		}
	}
	backtrack([]);
	return res;
};

let numbers = [1, 2, 3];
console.log(`The given array is : ${numbers}`);
let result = permutation(numbers);
console.log(`The permutations of given array`);
console.log(result);
