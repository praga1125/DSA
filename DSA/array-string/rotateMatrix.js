function rotateMatrix(matrix) {
	const transpose = (matrix) => {
		for (let i = 0; i < matrix.length; i++) {
			for (let j = i; j < matrix.length; j++) {
				[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
			}
		}
	};
	const reflect = (matrix) => {
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix.length / 2; j++) {
				[matrix[i][j], matrix[i][matrix.length - j - 1]] = [
					matrix[i][matrix.length - j - 1],
					matrix[i][j],
				];
			}
		}
	};
	transpose(matrix);
	reflect(matrix);
	return matrix;
}
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(`The given matrix is :`);
for (let j = 0; j < matrix.length; j++) {
	console.log(matrix[j]);
}
console.log(`---------------`);
console.log(`The rotated matrix is :`);
let result = rotateMatrix(matrix);
for (let i = 0; i < result.length; i++) {
	console.log(result[i]);
}
