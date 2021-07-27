let input = 128;
let temp, rem;
let obj1 = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	100: "hundred",
};

let obj2 = {
	2: "twenty",
	3: "thirty",
	4: "forty",
	5: "fifty",
	6: "sixty",
	7: "seventy",
	8: "eighty",
	9: "ninety",
	100: "hundred",
};

function convertIntoWord(tens, hundreds, num) {
	if (num in tens) {
		return tens[num];
	} else if (num < 100) {
		temp = Math.floor(num / 10);
		rem = num % 10;
		if (rem != 0) {
			return `${hundreds[temp]} ${tens[rem]}`;
		} else {
			return `${hundreds[temp]}`;
		}
	} else {
		temp = Math.floor(num / 100);
		rem = num % 100;
		if (rem != 0) {
			return (
				convertIntoWord(tens, hundreds, temp) +
				" hundred and " +
				convertIntoWord(tens, hundreds, rem)
			);
		} else {
			return convertIntoWord(tens, hundreds, temp) + " hundred ";
		}
	}
}

console.log(`input :`);
console.log(`The given number is : ${input}`);
console.log(`output :`);
let result = convertIntoWord(obj1, obj2, input);
console.log(result);
