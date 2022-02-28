const arr = [1, 3, 2, 4, 2];
const x = 1;
const y = 2;

const minDist = (arr, n, x, y) => {
	let x_index = -1;
	let y_index = -1;
	let result = Number.MAX_VALUE;
	for (let i = 0; i < n; i++) {
		if (arr[i] == x) {
			x_index = i;
		}
		if (arr[i] == y) {
			y_index = i;
		}
		if (x_index != -1 && y_index != -1) {
			result = Math.min(result, Math.abs(x_index - y_index));
		}
	}
	return result == Number.MAX_VALUE ? -1 : result;
};

const res = minDist(arr, arr.length, x, y);
console.log(res);
