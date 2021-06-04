let search = function (matrix, target) {
	if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
		return console.log(`The search element is not found`);
	}
	let rows = matrix.length;
	let cols = matrix[0].length;
	let y = cols - 1;
	for (let x = 0; x < rows; x++) {
		while (y && target < matrix[x][y]) {
			y--;
		}
		if (matrix[x][y] === target) {
			return console.log(`The search element position index at : ${x}, ${y}`);
		}
	}
	return console.log(`The search element is not found`);
};

const matrix = [
	[1, 4, 7, 11, 15],
	[2, 5, 8, 12, 19],
	[3, 6, 9, 16, 22],
	[10, 13, 14, 17, 24],
	[18, 21, 23, 26, 30],
];
console.log(`the given matrix :`);
console.log(matrix);
let target = 111;
console.log(`The target element is ${target}`);
search(matrix, target);
target = 23;
console.log(`The target element is ${target}`);
search(matrix, target);
