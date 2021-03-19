let search = function(matrix, target) {
	const len = matrix.length;
	const arrlen = len > 0 ? matrix[0].length : 0;
	let i = len-1, j = 0;
	while(i >= 0 && j < arrlen){
		if(matrix[i][j] == target){
			return console.log(`element is found in the matrix`);
		}
		if(matrix[i][j] > target){
			i--;
		}
		else{
			j++;
		}
	}
	return console.log(`element not found in the matrix`);
}

const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
console.log(`the given matrix :`);
console.log(matrix);
let target = 111;
console.log(`The target element is ${target}`);
search(matrix, target);
target = 1;
console.log(`The target element is ${target}`);
search(matrix, target);