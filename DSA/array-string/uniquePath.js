function uniquePath(row, col){
  let top = 1, bottom = 1;
  let total = col + row - 2;
  let k = col - 1;
  if(k == 0){
    return 1;
  }
  for(let i = 0; i < k; i++){
      top *= total - i;
      bottom *= i + 1;
  }
  return top/bottom;
}

let row = 7, col = 3;
console.log(`The given grid of row : ${row} and column : ${col} `);
let result = uniquePath(row, col);
console.log(`The possible unique paths are : ${result}`);