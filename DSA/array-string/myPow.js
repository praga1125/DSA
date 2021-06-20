function myPow(x, n) {
	if (n === 0) return 1;
	if (n === 1) return x;
	if (n < 0) return 1 / myPow(x, -n);
	if (n % 2 === 0) return myPow(x * x, n / 2);
	return x * myPow(x * x, (n - 1) / 2);
}

let num1 = 2.0;
let num2 = 10;
console.log(`The given values are :`);
console.log(`num1 : ${num1} , num2 : ${num2}`);
let result = myPow(num1, num2);
console.log(`The power of two numbers :`);
console.log(result);
