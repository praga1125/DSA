const rotateArray = (arr, k) => {
  if(arr.length == 0 || arr == null){
    return [];
  }
  k = k % arr.length;
  if(k == 0){
    return [];
  }
   arr.reverse();
   reverse(arr, 0, k-1);
   reverse(arr, k, arr.length-1);
   return arr;
}

const reverse = (arr, start, end) => {
  while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
} 

let arr = [1, 2, 3, 4, 5];
console.log(`The given array is : ${arr}`);
let times = 2;
let result = rotateArray(arr, times);
console.log(`The rotated array is : ${result}`);
