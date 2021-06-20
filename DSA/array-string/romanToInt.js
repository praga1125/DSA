function romanToInt(str) {
	let result = 0;
	const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	str = str.split("");
	for (let i = 0; i < str.length; i++) {
		if (str[i + 1] && map[str[i]] < map[str[i + 1]]) {
			result -= map[str[i]];
		} else {
			result += map[str[i]];
		}
	}
	return result;
}

let str = "IV";
console.log(`The given roman letter is : ${str}`);
let result = romanToInt(str);
console.log(`The roman letter to the Integer is : ${result}`);
