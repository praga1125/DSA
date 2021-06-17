const getReverseWords = (words) => {
	words.trim();
	let arr = words.split(" ");
	let reverseString = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[arr.length - 1 - i][0])
			reverseString += arr[arr.length - 1 - i] + " ";
	}
	return reverseString.trim();
};

let str = "praga loves kutty";
console.log(`The given string is : ${str}`);
let result = getReverseWords(str);
console.log(`The reversed string is : ${result}`);
