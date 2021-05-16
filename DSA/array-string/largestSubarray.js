function largestSubarray(arr){
  let candidates = [];
  let hashMap = {};
  let sum = 0;
  let maxDist = [0, -1, -1], i, j;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(sum == 0){
      if (i + 1 > maxDist[0]) {
        maxDist = [i+1, 0, i];
      }
    }
  if (hashMap[sum] === undefined) {
     hashMap[sum] = i;
    } 
  else {
    let delta = i - hashMap[sum];
    if (delta > maxDist[0]) {
        maxDist = [delta, hashMap[sum]+1, i];
    }
   }
 }
 return arr.slice(maxDist[1], maxDist[2]+ 1);
}

let arr = [-4, 1, 1, 8, 7, 1, 1, 1, 2, -5];
console.log(`The given array is : [${arr}]`);
let result = largestSubarray(arr);
console.log(`The largest continous sum of 0's are : [${result}]`);