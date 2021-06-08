function nextGreaterElement(nums1, nums2) {
	let result = [];
	nums1.forEach((num1) => {
		let res = -1;
		for (let i = nums2.indexOf(num1) + 1; i < nums2.length; i++) {
			if (nums2[i] > num1) {
				res = nums2[i];
				break;
			}
		}
		result.push(res);
	});
	return result;
}

let findNums = [1, 6];
console.log(`The find numbers are : ${findNums}`);
let nums = [5, 1, 6, 2, 0];
console.log(`The given numbers are : ${nums}`);
let result = nextGreaterElement(findNums, nums);
console.log(`The next greater elements are : ${result}`);
