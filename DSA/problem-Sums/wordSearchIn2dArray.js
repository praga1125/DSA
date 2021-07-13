let str = "WELCOMETOZOHOCORPORATION";
let word = new Array(5);
for (var i = 0; i < word.length; i++) {
	word[i] = new Array(3);
}
let k = 0;
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		word[i][j] = str[k];
		k++;
	}
}

console.log(`The given 2d array is :`);
console.log(word);
let target = "TOO";
console.log(`The target is : ${target}`);

function search() {
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (word[i][j] == "T" && word[i][j + 1] == "O" && word[i][j + 2] == "O") {
				return [
					[i, j],
					[i, j + 2],
				];
			}
			if (word[i][j] == "T" && word[i + 1][j] == "O" && word[i + 2][j] == "O") {
				return [
					[i, j],
					[i + 2, j],
				];
			}
		}
	}
}

let res = search();
console.log(`it starts with ${res[0][0]},${res[0][1]}`);
console.log(`it ends with ${res[1][0]},${res[1][1]}`);
