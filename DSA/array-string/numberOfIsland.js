// using BFS approach in find number of island 
const numIslands = (grid) => {
  const isIsland = (i, j) => 
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[i].length &&
    grid[i][j] === '1';
  const bfs = (i, j) => {
    const queue = [[i, j]];
    while(queue.length) {
      const [i, j] = queue.shift();
      grid[i][j] = '0';

      if (isIsland(i + 1, j)) 
        queue.push([i + 1, j]);
      if (isIsland(i, j + 1)) 
        queue.push([i, j + 1]);
      if (isIsland(i - 1, j)) 
        queue.push([i - 1, j]);
      if (isIsland(i, j - 1)) 
        queue.push([i, j - 1]);
    }
}
  let counter = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === '1') {
        counter += 1;
        bfs(i, j);
      }
    }
  }
  return counter;
}

const arr = [
  ["0","1","0","0","0"],
  ["1","0","1","0","1"],
  ["0","0","1","1","0"],
  ["1","0","1","0","0"]
];
console.log(`the given array is : `);
console.log(arr);
const result = numIslands(arr);
console.log(`The numbers of Islands are : ${result} `);