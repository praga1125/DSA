const longestIncreaseSubsequence = (arr) => {
  const temp = Array(arr.length).fill(Infinity);
  function binarySearch(target){
    let low = 0, high = temp.length-1;
    while(low < high){
      let mid = Math.floor((low + high) / 2);
      // console.log(mid);
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
   let result = temp.indexOf(Infinity);
   return result == -1 ? arr.length : result;
}

let arr = [3, 9, 4, 5, 6];
console.log(`The given array is : ${arr}`);
let result = longestIncreaseSubsequence(arr);
console.log(`The length of the longest increasing subsequence : ${result}`);
