function rotateMatrix(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < Math.floor(n/2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-1-j][i];
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
            matrix[j][n-1-i] = temp;
        }
    }
    return matrix;
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(`The given matrix is :`);
for(let j=0;j<matrix.length;j++){
    console.log(matrix[j]);
}
console.log(`---------------`);
console.log(`The rotated matrix is :`);
let result = rotateMatrix(matrix);
for(let i=0;i<result.length;i++){
console.log(result[i]);
}