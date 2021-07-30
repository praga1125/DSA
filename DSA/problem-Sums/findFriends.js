let num = 3;
let friends = ["mani", "ram", "mughil"];
let mutual = [
	"ram",
	"raj",
	"guna",
	"kumar",
	"kishore",
	"praveen",
	"naveen",
	"ramesh",
];
let flag = 0,
	result = [];

function strCmp(str1, str2) {
	return str1 == str2 ? 0 : str1 > str2 ? 1 : -1;
}
for (let i = 0; i < mutual.length; i++) {
	flag = 0;
	for (let j = 0; j < num; j++) {
		if (strCmp(friends[j], mutual[i]) == 0) {
			flag = 1;
		}
	}
	if (flag != 1) {
		result.push(mutual[i]);
	}
}

console.log(result);
