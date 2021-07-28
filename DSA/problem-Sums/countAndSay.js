let num = 5;
const countSay = (num) => {
	if (num == 1) {
		return "1";
	}
	let preElement = countSay(num - 1);
	let currentElement,
		count = 0;
	let str = "";
	for (let i = 0; i < preElement.length; i++) {
		if (i == 0) {
			currentElement = preElement[i];
			count += 1;
		} else if (preElement[i] == currentElement) {
			count += 1;
		} else {
			str += count + currentElement;
			currentElement = preElement[i];
			count = 1;
		}
		if (i == preElement.length - 1) {
			str += count + currentElement;
		}
	}
	return str;
};

let result = countSay(num);
console.log(`The given number is : ${num}`);
console.log(`The ${num}th term of the count and say sequence is : `);
console.log(result);
