let str = "(a*b)(h+h)";
let arr = str.split("");
let stack = [],
	k = 0,
	flag = 0;
let operator = ["+", "-", "*", "%", "/"];
function checker(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "(") {
			stack.push(arr[i]);
		} else if (arr[i] == ")") {
			stack.pop();
		} else {
			while (k < operator.length) {
				if (operator[k] == arr[i + 1]) {
					flag = 1;
				}
				k++;
			}
		}
	}
	if (flag == 0) {
		return `invalid`;
	}
	return stack.length == 0 ? `valid` : `invalid`;
}

let result = checker(arr);
console.log(`The expression is : ${str}`);
console.log(`The given expression is : ${result}`);
