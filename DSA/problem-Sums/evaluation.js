let exp = "1+2*5+3";

function isOperand(char) {
	return (
		char.charCodeAt(0) >= "0".charCodeAt(0) &&
		char.charCodeAt(0) <= "9".charCodeAt(0)
	);
}

function value(char) {
	return char.charCodeAt(0) - "0".charCodeAt(0);
}

function evaluate(exp) {
	if (exp.length == 0) return -1;
	let result = value(exp[0]);
	for (let i = 1; i < exp.length; i += 2) {
		let [operator, operand] = [exp[i], exp[i + 1]];
		if (isOperand(operand) == false) return -1;
		switch (operator) {
			case "+":
				result += value(operand);
				break;
			case "-":
				result -= value(operand);
				break;
			case "*":
				result *= value(operand);
				break;
			case "/":
				result /= value(operand);
				break;
		}
	}
	return result;
}

console.log(`The given expression is : (${exp})`);
let ans = evaluate(exp);
console.log(`The evaluation of expression is : ${ans}`);
