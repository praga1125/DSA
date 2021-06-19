const search = function (matrix, target) {
	let m = matrix.length;
	if (m === 0) return false;
	let n = matrix[0].length;
	let left = 0;
	let right = m * n - 1;
	let pivotId;
	let pivotElement;
	while (left <= right) {
		pivotId = Math.floor((left + right) / 2);
		pivotElement = matrix[Math.floor(pivotId / n)][pivotId % n];
		if (target === pivotElement) {
			return true;
		} else {
			if (target > pivotElement) {
				left = pivotId + 1;
			} else {
				right = pivotId - 1;
			}
		}
	}
	return false;
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
console.log(search(matrix, target));
target = 30;
console.log(`The target element is ${target}`);
console.log(search(matrix, target));

