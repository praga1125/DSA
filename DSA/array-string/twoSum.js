function twoSum(arr, target){
  if(arr.length == 2){
    return [0, 1];
  }
  let maps = {};
  for(let i = 0; i < arr.length; i++){
    let n = target - arr[i];
    let find = maps[n];
    if(find != undefined){
      return [find, i];
    }
    else {
      maps[arr[i]] = i;
    }
  }
}

let arr = [5, 6, 7, 8, 1];
console.log(`The given array is : ${arr}`);
let target = 9;
console.log(`The given sum value is : ${target}`);
let result = twoSum(arr, target);
console.log(`The two sum of values in index at: ${result}`);