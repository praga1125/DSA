const intersect = (nums1, nums2) => {
	let max, min;
	if (nums1.length > nums2.length) {
		max = nums1;
		min = nums2;
	} else {
		max = nums2;
		min = nums1;
	}
	let result = [];
	for (let i = 0; i < min.length; i++) {
		if (max.includes(min[i])) {
			result.push(min[i]);
			max[max.indexOf(min[i])] = null;
		}
	}
	return result;
};

console.log(`The given array values :`);
let arr1 = [11, 22, 22, 33];
let arr2 = [44, 55, 66, 77, 11, 22, 33];
console.log(arr1);
console.log(arr2);
let result = intersect(arr1, arr2);
console.log(`The common intersection values are : ${result}`);
