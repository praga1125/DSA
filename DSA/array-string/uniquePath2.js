const uniquePathWithObstacles = (arrayGrid) => {
  let matrix = arrayGrid;
  let row = matrix.length;
  let col = matrix[0].length;
  if(matrix[0][0] === 1 ||matrix[row-1][col-1] === 1 || matrix.length === 0) return 0;
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) { 
      if(matrix[i][j] == 1){
        matrix[i][j] = 0;
      } else if(i == 0 && j == 0) {
        matrix[i][j] = 1;
      } else {
        let up = 0, left = 0;
        if(i > 0) {
          up = matrix[i-1][j];
        }
        if(j > 0) {
          left = matrix[i][j-1];
        }
        matrix[i][j] = up + left;
      } 
    }
  }
  return arrayGrid[row-1][col-1];
}

const arrayGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(`The given array grid is :`);
console.log(arrayGrid);
const result = uniquePathWithObstacles(arrayGrid);
console.log(`There are ${result} ways of unique paths with obstacles to reach end`);