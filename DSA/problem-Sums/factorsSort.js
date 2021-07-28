let arr = [5, 11, 10, 20, 9, 16, 23];
let result = [],
	obj = {},
	sorted = [];
function factors(num) {
	let count = 0;
	let sq = Math.floor(Math.sqrt(num));
	if (sq * sq == num) {
		count++;
	}
	for (let i = 1; i < Math.sqrt(num); i++) {
		if (num % i == 0) {
			count += 2;
		}
	}
	obj[num] = count;
}

for (let i = 0; i < arr.length; i++) {
	factors(arr[i]);
}

for (let i in obj) {
	sorted.push([i, obj[i]]);
}
sorted.sort((a, b) => {
	return a[1] - b[1];
});

for (let i = sorted.length - 1; i > 0; i--) {
	result.push(Number(sorted[i][0]));
}
console.log(`The given array is : `);
console.log(arr);
console.log(`The sorted elements basis of number of factors : `);
console.log(result);
