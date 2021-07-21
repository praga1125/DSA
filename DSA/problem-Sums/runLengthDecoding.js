let str = "a2b10c12";
let arr = str.split("");
let result = "";
let len = arr.length;
for (let i = 1; i < len; i++) {
	if (Number.isInteger(Number(arr[i]))) {
		if (Number.isInteger(Number(arr[i + 1]))) {
			result += arr[i - 1].repeat(Number(arr[i] + arr[i + 1]));
		} else if (arr[i + 1] != undefined) {
			result += arr[i - 1].repeat(Number(arr[i]));
		}
	}
}

console.log(`The given str : ${str}`);
console.log(`The output of the following : ${result}`);
