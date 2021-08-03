let arr = [
	[27, 1, 2011],
	[14, 12, 2003],
	[30, 5, 2003],
	[20, 6, 2004],
];
console.log(`The given dates are : `);
console.log(arr);
arr.sort((a, b) => {
	return a[2] !== b[2] ? a[2] - b[2] : a[1] - b[1];
});
console.log(`The sorted array is : `);
console.log(arr);
