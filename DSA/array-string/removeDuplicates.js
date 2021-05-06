function removeDuplicates(arr){
  let obj = {};
  let result = [];
  for(let i=0; i<arr.length;i++){
    if(obj[arr[i]] == 0){
        obj[arr[i]] = 1;
    }
    else {
      obj[arr[i]] = 0;
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = [1, 3, 4, 5, 1, 2, 3];
console.log(`The given array is : ${arr}`);
let result = removeDuplicates(arr);
console.log(`The removed duplicates array is : ${result}`);