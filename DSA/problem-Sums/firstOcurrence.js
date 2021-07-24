let str = "test123string";
let str2 = "12";
let k = 0;
let idx = [],
	res;
function search() {
	for (let i = 0; i < str.length; i++) {
		if (str[i] == str2[k]) {
			idx.push(i);
			k++;
			if (k == str2.length) {
				return idx[0];
			}
		} else {
			k = 0;
		}
	}
	return -1;
}

res = search();
console.log(`The given string is : ${str}`);
console.log(`The target is : ${str2}`);
if (res != -1) {
	console.log(`The first occurrence of the string index is : ${res}`);
} else {
	console.log(`The string doesn't contain the target`);
}
