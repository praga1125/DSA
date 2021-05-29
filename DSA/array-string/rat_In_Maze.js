const printSolution = (grid) => {
  console.log(grid.map((row) => row.join(' | ')).join('\n') + '\n');
}

 const isSafe = (maze, x, y) => {
  const length =  maze.length;
  if(x >= 0 && x < length && y >= 0 && y < length && maze[x][y] === 1) {
    return true;
  }
  return false;
 }

 const solveMazeUtil = (maze, x, y, solved) => {
  const length= maze.length;
  if(x === length - 1 && y === length - 1) {
    solved[x][y] = 1;
    return true;
  } 
  if(isSafe(maze, x, y)) { 
    solved[x][y] = 1;
    if(solveMazeUtil(maze, x+1, y, solved)){
      return true;
    }
    if(solveMazeUtil(maze, x, y+1, solved));{
      return true;
    }

    solved[x][y] = 0;
    return false;
  }
  return false;
 }

 function solveMaze(maze) {
  const sol = new Array(maze.length);
  let idx = 0;
  for (idx = 0; idx < maze.length; idx++) {
    sol[idx] = new Array(maze.length).fill(0);
  }
  return solveMazeUtil(maze, 0, 0, sol) ? {solved: true, solution: sol} : {solved: false, solution: null};
}

const maze = [[1,0,0,0],[1,1,0,1],[0,1,0,0],[1,1,1,1]];
console.log(`The given binary matrix representation of the maze\n`);
printSolution(maze);
const res = solveMaze(maze);
// console.log(res.solved);
console.log(`The 1 values show the path for rat:\n`);
printSolution(res.solution);
