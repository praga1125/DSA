let str = "program";
let len = str.length;
let result = "";
for (let i = 0; i < len; i++) {
	for (let j = 0; j < len; j++) {
		if (i == j || i + j == len - 1) {
			result += str[j];
			result += " ";
		} else {
			result += " ";
		}
	}
	result += "\n";
}
console.log(result);
