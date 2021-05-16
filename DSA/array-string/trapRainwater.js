function trapRainwater(heights){
  let low = 0;
  let range = heights.length - 1;
  let level = 0, sum = 0;
  while(low < range){
    let lower = 0;
    if(heights[low] < heights[range]){
      lower = heights[low];
      low++;
    }
    else {
      lower = heights[range];
      range--;
    }
    level = Math.max(lower, level);
    sum += level - lower;
  }
  return sum;
}

let heights = [3, 2, 0, 4, 0, 2, 4];
console.log(`The elevation map is represented by given array : [${heights}]`);
let result = trapRainwater(heights);
console.log(`${result} units of rain water are being trapped`);