let arr = [10, 36, 54, 89, 12];
let result = [];
for (let i = 0; i < arr.length; i++) {
	let data = 0,
		weight = 0;
	if (arr[i] > 0 && Math.sqrt(arr[i]) % 1 === 0) {
		data = arr[i];
		weight = 5;
	}
	if (arr[i] % 4 == 0 && arr[i] % 3 == 0) {
		weight += 4;
	}
	if (arr[i] % 2 == 0) {
		weight += 3;
	}
	result.push([arr[i], weight]);
}

result.sort((a, b) => a[1] - b[1]);
console.log(`given array is :`);
console.log(arr);
console.log(`find weights and sort based on weight :`);
console.log(result);
