let str = "we are indians";
let arr = str.split(" ");
let result = "";
let len = arr.length - 1;

function reverse(i) {
	if (i >= 0) {
		result += arr[i] + " ";
		reverse(--i);
	}
}

console.log(`The given string is : ${str}`);
reverse(len);
console.log(`The reversed string : ${result}`);
