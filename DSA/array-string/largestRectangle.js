function largestRectangleArea(heights){
    heights.push(0);
    let stack = [];
    let maxArea = 0, curr, currHeight, top, topHeight, area;
    for(let i=0; i < heights.length; i++){
        top = stack[stack.length-1];
        topHeight = stack[top];
        while(stack.length > 1 && topHeight > heights[i]) {
            curr = stack.pop();
            currHeight = heights[curr];
            top = stack[stack.length-1];
            topHeight = heights[top];
            area = currHeight * (i - 1 - top);
            maxArea = Math.max(area, maxArea);
        }
        while(stack.length && topHeight > heights[i]) {
            curr = stack.pop();
            currHeight = heights[curr];
            top = stack[stack.length-1];
            topHeight = heights[top];
            area = currHeight * (stack.length ? i-1-top : i);
            maxArea = Math.max(area, maxArea);
        }
        stack.push(i);
    }
    return maxArea;
}

let arr = [1, 2, 5, 5, 6, 1, 3];
console.log(`The given array is : ${arr}`);
let result = largestRectangleArea(arr);
console.log(`The largest rectangle in histogram : ${result}`);