function maxSlidingWindow(arr, limit){
  let indx = [];
  let result = [];
  for(let i=0; i<arr.length; i++){
    while(indx && arr[indx[indx.length-1]] <= arr[i]){
      indx.pop();
    }
    indx.push(i);
    if(i == limit-i){
      indx.shift();
    }
    if(i >= limit-1){
      result.push(arr[indx[0]]);
    }
  }
  return result;
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(`The given array is : `);
console.log(arr);
let limit =  3;
console.log(`The given window limit is : ${limit}`);
let result = maxSlidingWindow(arr, limit);
console.log(`The maximum value of  sliding window is : `);
console.log(result);