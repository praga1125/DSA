const mostConsecutiveOne = (nums) => {
	var i = 0;
	var result;
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] == 1) i++;
		else {
			result = result > i ? result : i;
			i = 0;
		}
	}
	return result > i ? result : i;
};

let nums = [1, 0, 1, 1, 1, 1, 0, 1];
console.log(`The given numbers are :`);
console.log(nums);
let result = mostConsecutiveOne(nums);
console.log(` The maximum number of consecutive 1s is  : ${result}`);
