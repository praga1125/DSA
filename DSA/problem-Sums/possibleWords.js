let num = "11112";
function convertor(num, words) {
	if (num === "") {
		console.log(words);
	} else {
		let temp = Number(num.substring(0, 1));
		convertor(
			num.substring(1),
			words + String.fromCharCode("A".charCodeAt(0) + temp - 1)
		);
		if (num.length >= 2 && (temp = Number(num.substring(0, 2))))
			convertor(
				num.substring(2),
				words + String.fromCharCode("A".charCodeAt(0) + temp - 1)
			);
	}
}

console.log(`The given number is : ${num}`);
console.log(`the possible words are : `);
convertor(num, "");
