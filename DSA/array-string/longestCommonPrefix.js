function longestCommonPrefix(str) {
	let len = str.length;
	if (len == 0) return "";
	if (len == 1) return str[0];
	str.sort();
	let min = Math.min(str[0].length, str[len - 1].length);
	let i = 0;
	while (i < min && str[0][i] == str[len - 1][i]) i++;
	let pre = str[0].substring(0, i);
	return pre;
}

let str = ["flip", "flop", "flower", "flow"];
console.log(`The given string array is : ${str} `);
let result = longestCommonPrefix(str);
console.log(`The longest common prefix is : ${result}`);
