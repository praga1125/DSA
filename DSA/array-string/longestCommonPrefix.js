function longestCommonPrefix(str) {
	if (str.length == 0 || str.length < 0 || str.length > 200) return "";
	let prefix = str[0];
	for (let i = 0; i < str.length; i++) {
		while (str[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (prefix == "") return "";
		}
	}
	return prefix;
}

let str = ["flip", "flop", "flower", "flow"];
console.log(`The given string array is : ${str} `);
let result = longestCommonPrefix(str);
console.log(`The longest common prefix is : ${result}`);
