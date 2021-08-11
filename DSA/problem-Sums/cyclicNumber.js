function isCyclic(num) {
	let [value, count, same] = [num, 0, true];
	let digit = value % 10;
	while (value > 0) {
		count++;
		if (value % 10 != digit) {
			same = false;
		}
		value = Math.floor(value / 10);
	}
	if (same == true) {
		return false;
	}
	if (count % 2 == 0) {
		let halfPower = Math.pow(10, Math.floor(count / 2));
		let firstHalf = num % halfPower;
		if (firstHalf == firstHalf && isCyclic(firstHalf)) {
			return false;
		}
	}
	let value1 = num;
	while (1) {
		let rem = value1 % 10;
		let div = Math.floor(value1 / 10);
		value1 = Math.pow(10, count - 1) * rem + div;
		if (value1 == num) {
			break;
		}
		if (value1 % num != 0) {
			return false;
		}
	}
	return true;
}

let input = 142857;
console.log(`The given number is : ${input}`);
if (isCyclic(input)) {
	console.log(`yes, It is a cyclic number`);
} else {
	console.log(`no, It is not a cyclic number`);
}
