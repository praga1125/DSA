function largestRectangleArea(heights) {
	let n = heights.length;
	if (n < 1) return 0;
	let stack = [];
	let ret = heights[0];
	for (let i = 0; i <= n; i++) {
		let h = i < n ? heights[i] : 0;
		if (stack.length == 0 || heights[stack[stack.length - 1]] < h) {
			stack.push(i);
			continue;
		}
		while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
			let s = stack.pop();
			let w = i;
			let start = stack.length > 0 ? stack[stack.length - 1] : -1;
			w = i - start - 1;
			let area = heights[s] * w;
			ret = Math.max(ret, area);
		}
		stack.push(i);
	}
	return ret;
}

let arr = [1, 2, 5, 5, 6, 1, 3];
console.log(`The given array is : ${arr}`);
let result = largestRectangleArea(arr);
console.log(`The largest rectangle in histogram : ${result}`);
