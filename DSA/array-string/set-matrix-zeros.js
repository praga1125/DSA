let setZero = (matrix) => {
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] == 0){
        markPosition(matrix, i, j);
      }
    }
  }

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] == null){
        matrix[i][j] = 0;
      }
  }
}  
  return matrix;
}

let markPosition = (matrix, row, col) => {
  for(let i=0; i<matrix[0].length; i++){
    if(matrix[row][i] != 0){
      matrix[row][i] = null;
    }
    if(matrix[i][col] != 0){
      matrix[i][col] = null;
    }
  }
}

let matrix = [[1,0,1],[1,0,1],[1,1,1]];
console.log(`The given array  is :`);
for(let i of matrix)
console.log(i);
let result = setZero(matrix);
console.log(`The set matrix zero :`);
for(let j of result)
console.log(j);