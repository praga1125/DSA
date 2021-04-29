const mostConsecutiveOne = (nums) => {
  let max = 0, count = 0;
  for(let num of nums){
    if(num == 1){
      count++;
    if(count > max){
      max = count;
    }
  }
    else {
      count = 0;
    }
  }
  return max;
}

let nums = [1, 0, 1, 1, 1, 1, 0, 1];
console.log(`The given numbers are :`);
console.log(nums);
let result = mostConsecutiveOne(nums);
console.log(` The maximum number of consecutive 1s is  : ${result}`);