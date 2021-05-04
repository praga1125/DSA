const longestIncreaseSubsequence = (arr) => {
  const temp = Array(arr.length).fill(Infinity);
  let sum = 0;
  function binarySearch(target){
    let low = 0, high = temp.length-1;
    while(low < high){
      let mid = Math.floor((low + high) / 2);
      if(temp[mid] >= target){
        high = mid;
      }
      else {
        low = mid + 1;
      }
    }
    return low;
  } 
  for(let num of arr){
    const indx = binarySearch(num);
    temp[indx] = num;
   }
   for(let i=0; i<temp.length-1; i++){
     sum += temp[i];
   }
   return sum;
}

let arr = [3, 9, 4, 5, 6];
console.log(`The given array is : ${arr}`);
let result = longestIncreaseSubsequence(arr);
console.log(`The length of the longest increasing subsequence : ${result}`);
