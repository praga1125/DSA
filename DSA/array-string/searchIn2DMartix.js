let search = function(matrix, target) {
	if(!matrix.length){
		return console.log(`element is not found`);;
	}
	let row = 0, col = matrix[0].length - 1;
	while(row < matrix.length && col >= 0){
		if(matrix[row][col] == target){
			return console.log(`element is found`);;
		}
		if(	matrix[row][col] > target){
			col--;
		}
		else{
				row++;
		}
	}
	return console.log(`element is not found`);;
}

const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
console.log(`the given matrix :`);
console.log(matrix);
let target = 111;
console.log(`The target element is ${target}`);
search(matrix, target);
target = 23;
console.log(`The target element is ${target}`);
search(matrix, target);