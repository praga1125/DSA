// print all combination of alphabets for that given number
function numToStr(num) {
	var word = "";
	let digits = num.toString().split("");
	let realDigits = digits.map(Number), j = 0;
	let char = {}, count = 1;
	for (let i = 97; i <= 122; i++) {
		char[String.fromCharCode(i)] = count;
		count++;
	}
	for (let i = 0; i < Object.values(char).length; i++) {
		if (Object.values(char)[i] == realDigits[j]) {
			word += Object.keys(char)[i];
			j++;
		}
	}
	return combinations(word);
}

function combinations(str) {
	let tempArr = [];
	let combinations = [];
	for (let i = 0; i < str.length; i++) {
		tempArr = [str[i]];
		let index = 0;
		while (combinations[index]) {
			tempArr.push("" + combinations[index] + str[i]);
			index++;
		}
		combinations = combinations.concat(tempArr);
	}
	return combinations;
}

let num = 123;
let result = numToStr(num);
console.log(result);
