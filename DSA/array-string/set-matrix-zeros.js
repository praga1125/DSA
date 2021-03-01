let setZero = (matrix) => {
let xs = new Set();
let ys = new Set();
for(let i =0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        if(matrix[i][j]){
            continue;
        }
        else{
            xs.add(i);
            ys.add(j);
        }
    }
}
for(let i=0;i<matrix.length;i++){
    for(j=0;j<matrix[i].length;j++){
        if(xs.has(i) || ys.has(j)){
            matrix[i][j] = 0;
        }
        else{
            continue;
        }
    }
}
return matrix;
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]];
console.log(matrix);
let result = setZero(matrix);
console.log(result);