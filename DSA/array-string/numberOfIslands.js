let numIslands = (grid) => {
	const DFS = (i, j) => {
		if (
			i < 0 ||
			i >= grid.length ||
			j < 0 ||
			j >= grid[i].length ||
			grid[i][j] === "0"
		) {
			return;
		}
		grid[i][j] = "0";

		DFS(i - 1, j);
		DFS(i + 1, j);
		DFS(i, j - 1);
		DFS(i, j + 1);
	};

	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === "1") {
				count++;
				DFS(i, j);
			}
		}
	}
	return count;
};

const arr = [
	["0", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "1", "1", "1", "0"],
	["1", "0", "1", "0", "0"],
];
console.log(`the given array is : `);
console.log(arr);
const result = numIslands(arr);
console.log(`The numbers of Islands are : ${result} `);
