function nextSmallerElement(arr) {
	var result = [-1],
		  stack = [];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			result.push(arr[i - 1]);
			stack.push(arr[i - 1]);
		} else {
			while (stack.length && stack[stack.length - 1] >= arr[i]) stack.pop();
			if (stack.length) result.push(stack[stack.length - 1]);
			else result.push(-1);
		}
	}
	return result;
}

let arr = [6, 4, 2, 7, 1, 4];
console.log(`The given array is :`);
console.log(arr);
let result = nextSmallerElement(arr);
console.log(`The next smaller elements are :`);
console.log(result);
