let generate = (numRows) => {
    let triangle = [];
    if(numRows == 0) { 
        return triangle;
    }
    for (let i = 0; i < numRows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
        triangle[i][i] = 1;
    }
    return triangle;
}
let result = generate(5);
for(i of result){
console.log();
console.log(i);
}