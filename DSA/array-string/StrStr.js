function StrStr(str, pattern) {
	let ptr = 0;
	let result = -1;
	if (str.length == "" && pattern.length == "") {
		return 0;
	} else {
		while (ptr < str.length) {
			if (str.slice(ptr, ptr + pattern.length) == pattern) {
				result = ptr;
				break;
			}
			ptr++;
		}
		return result;
	}
}

let str = "helloPraga";
console.log(`The given string is : ${str}`);
let pattern = "aga";
console.log(`The given pattern string is : ${pattern}`);
let result = StrStr(str, pattern);
if (result != -1) {
	console.log(`The string and pattern is matched in index of : ${result}`);
} else {
	console.log(`The string and pattern are not matched`);
}
