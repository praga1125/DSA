function subset(nums){
  nums = nums.sort((a,b) => a-b);
  const result = [];  
  function helper(length, start=0, arr = []) {
      if (arr.length === length) {
          result.push(arr.slice());
          return;
      }
      for(let i=start; i<nums.length; i++) {       
          if (i !== start && nums[i-1] === nums[i]){ 
            continue;
          }
          arr.push(nums[i]);
          helper(length, i+1, arr);
          arr.pop();            
      }
  }
  for(let length=0; length<=nums.length; length++) {
      helper(length);
  }
  return result;
}

let arr = [1,2,2];
console.log(`The given array is : ${arr}`);
let result = subset(arr);
console.log(`The all possible of power subsets are : `);
console.log(result);