let num = 1234;
function isMagic(num) {
	if (num % 9 === 1) {
		console.log(`It is a magic number`);
	} else {
		console.log(`It is not a magic number`);
	}
}

console.log(`The given number is : ${num}`);
isMagic(num);
