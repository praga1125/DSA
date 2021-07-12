// find the count of the grand children
let count = 0;
let target = "ajith",
	temp;
let str = [
	["praga", "gopal"],
	["viki", "gopal"],
	["gopal", "ajith"],
	["rajini", "gopal"],
];
// in array first string denotes child, second string denotes father
let len = str.length;
function grandChild(x) {
	for (let i = 0; i < len; i++) {
		if (x == str[i][1]) {
			count++;
		}
	}
}

for (let i = 0; i < len; i++) {
	if (str[i][1] == target) {
		temp = str[i][0];
		grandChild(temp);
	}
}

console.log(`total members in the family :`);
console.log(str);
console.log(`There are ${count} grand children for the ${target}`);
