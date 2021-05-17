function rotateArray(arr, k){
  k %= arr.length;
  let reverse = (i, j) => {
    while(i < j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  reverse(0, arr.length-1);
  reverse(0, k - 1);
  reverse(k, arr.length-1);
  return arr; 
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
let result = rotateArray(arr, k);
console.log(result);