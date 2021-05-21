const longestSubsequence = (nums) => {
  let temp = Array(nums.length).fill(1);
  let count = Array(nums.length).fill(1);
  
  let maxLen = 0;
  for(let i = 0; i < nums.length; i++) { 
      for(let j = 0; j < i; j++) { 
          if(nums[j] < nums[i] && temp[j]+1 > temp[i]) {
              temp[i] = temp[j]+1;
              count[i] = count[j];
          } else if(nums[j] < nums[i] && temp[j]+1 === temp[i]) {
              count[i] += count[j];
          } 
      }
      maxLen = Math.max(temp[i], maxLen);
  }
  
  let result = 0;
  for(let i = 0; i < count.length; i++) {
      if(temp[i] === maxLen) result += count[i];
  }
  
  return result;
}

const arr = [1, 3, 5, 4, 7];
console.log(`The given array is : ${arr}`);
const result = longestSubsequence(arr);
console.log(`There are ${result} longest subsequences in a array`);