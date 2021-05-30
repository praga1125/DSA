function solveNQueens(n){
  let result = [];
  backTrack(result, n);
  return result;
}
function backTrack(result, n, board = [], row = 0){
  if(row == n){
    result.push(board.map(col => '.'.repeat(col) + 'Q' +'.'.repeat(n-col-1)));  
    return;
  }
  for(let col = 0; col < n; col++){
    if(!board.some((itemCol, itemRow) => itemCol == col || itemCol + itemRow == col + row || itemCol - itemRow == col - row)){
      board.push(col);
      backTrack(result , n, board, row + 1);
      board.pop();
    }
  }
}

let n = 4;
let result = solveNQueens(n);
console.log(result); 