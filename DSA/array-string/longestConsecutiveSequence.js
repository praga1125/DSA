//  Time complexity : O(n log n)
//  Space complexity : O(1)
function longestConsecutive(nums){
  if(nums.length == 0) {
    return 0;
  }
  let numSet = new Set(nums);
  let sortArr = [...numSet];
  let max = 1 ;
  let count = 1;
  sortArr.sort((a, b) => a - b);
  for(let i = 0; i < sortArr.length - 1; i++) {
    if(sortArr[i] + 1 !== sortArr[i + 1]) {
      count = 1;
    } else {
      count++;
      if(max < count) {
        max = count;
      }
    }
  }
  return max;
}

let arr = [9, 1, 3, 2, 4, 8, 7];
console.log(`The given array is : ${arr}`);
let result = longestConsecutive(arr);
console.log(`The length of the  longest consecutive sequence is : ${result}`);