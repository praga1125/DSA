let intersect = (nums1, nums2) => {
	let base, sub;
	if (nums1.length > nums2.length) {
		base = nums1;
		sub = nums2;
	} else {
		base = nums2;
		sub = nums1;
	}
	let result = [];
	for (let i = 0; i < sub.length; i++) {
		if (base.includes(sub[i])) {
			result.push(sub[i]);
			base[base.indexOf(sub[i])] = null;
		}
	}
	return result;
}

console.log(`The given array values :`);
let arr1 = [11, 22, 22, 33];
let arr2 = [11, 22, 33, 44, 11, 33];
console.log(arr1);
console.log(arr2);
let result = intersect(arr1, arr2);
console.log(`The common intersection values are : ${result}`);
