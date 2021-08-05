function removeZero(n) {
	let temp = 1;
	let result = 0;
	while (n > 0) {
		if (n % 10 != 0) {
			result += (n % 10) * temp;
			temp *= 10;
		}
		n = Math.floor(n / 10);
	}
	return result;
}

let a = 101;
let b = 102;

console.log(`The given numbers are : ${a} and ${b}`);
if (removeZero(a) + removeZero(b) === removeZero(a + b)) {
	console.log(`Yes`);
} else {
	console.log(`No`);
}
