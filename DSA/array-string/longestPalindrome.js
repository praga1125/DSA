function longestPalindrome(str) {
	let longestStart = 0;
	let longestLength = 1;

	for (let i = 0; i <= str.length - longestLength / 2; i++) {
		let left = i;
		let right = i;
		while (str[right + 1] === str[left]) {
			right++;
		}
		i = right;
		while (str[left] === str[right] && left >= 0 && right < str.length) {
			left--;
			right++;
		}
		const start = left + 1;
		const len = right - start;
		if (longestLength < len) {
			longestStart = start;
			longestLength = len;
		}
	}

	return str.slice(longestStart, longestStart + longestLength);
}

let str = "babe";
console.log(`The given string is : ${str}`);
let result = longestPalindrome(str);
console.log(`The longest palindrome is : ${result}`);
