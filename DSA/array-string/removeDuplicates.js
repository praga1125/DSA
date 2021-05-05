function removeDuplicates(arr){
  let i = 0;
  for(let j = 1; j < arr.length; j++){
    if(arr[i] != arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  arr.length = i + 1;
  return arr;
}

let arr = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6];
console.log(`The given array is : ${arr}`);
let result = removeDuplicates(arr);
console.log(`The removed duplicates array is : ${result}`);