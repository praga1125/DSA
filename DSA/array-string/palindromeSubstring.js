function longestPalindrome(str) {
	let len = str.length;
	while (len > 0) {
		for (let i = 0; i < str.length - len + 1; i++) {
			let word = str.slice(i, i + len);
			if (isPalindrome(word)) {
				return word;
			}
		}
		len--;
	}
	return "";
}
function isPalindrome(arr) {
	let i = 0;
	let j = arr.length - 1;
	while (i <= j) {
		if (arr[i] !== arr[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

let str = "0aba1";
console.log(`The given string is : ${str}`);
let result = longestPalindrome(str);
console.log(`The longest palindrome is : ${result}`);
