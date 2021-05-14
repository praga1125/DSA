//  Time complexity : O(n)
//  Space complexity : O(1)
function longestConsecutive(arr){
  if(arr.length < 1){
    return 0;
  }
  let maxLen = 1;
  let counter = 1;
  arr.sort((a, b) => a - b);
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - arr[i - 1] == 1){
        counter++;
    }
    else if(arr[i] == arr[i + 1]){
      continue;
    }
    else {
      maxLen = Math.max(counter, maxLen);
      counter = 1;
    }    
  }
  return Math.max(maxLen, counter);
}

let arr = [9, 1, 3, 2, 4, 8, 7];
console.log(`The given array is : ${arr}`);
let result = longestConsecutive(arr);
console.log(`The length of the  longest consecutive sequence is : ${result}`);