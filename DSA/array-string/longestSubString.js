const longestSubString = (str) => {
	let maxLen = 0,
		maxStr = "",
		postIndex,
		temp;
	for (let i = 0; i < str.length; i++) {
		temp = str[i];
		postIndex = maxStr.indexOf(temp);
		if (postIndex > -1) {
			maxStr = maxStr.substring(postIndex + 1);
		}
		maxStr += temp;
		maxLen = Math.max(maxLen, maxStr.length);
	}
	return maxLen;
};

let str = "abczaala";
console.log(`The given string is : ${str}`);
const result = longestSubString(str);
console.log(`The length of the longest substring : ${result}`);
