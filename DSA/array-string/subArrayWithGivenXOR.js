function countNumbers(arr, target){
  if(arr.length == 0){
    return 0;
  }
  let count = {};
  count[0] = 1;
  let pre = 0, result = 0;
  for(let x of arr) {
    pre = pre ^ x;
    let xor = pre ^ target;
    if(xor in count) {
        result += count[xor];
    }
    if(!(pre in count)){ 
    count[pre] = 0;
    }
    count[pre] += 1
}
  return result; 
}

let arr = [4, 2, 2, 6, 4];
console.log(`The given array is : ${arr}`);
let target = 6;
let result = countNumbers(arr, target);
console.log(`The total numbers of subArrays having bitwise XOR : ${result}`);
