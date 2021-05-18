const matrixChainOrder = (arr, i, j) => {
  if( i == j) {
    return 0;
  }
  let min = Number.MAX_VALUE;
  let k = 0;
  for(k = i; k < j; k++){
    let count = matrixChainOrder(arr, i, k) + matrixChainOrder(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];

  if (count < min){
    min = count;
  }
  }
  return min;
}

let arr = [10, 20, 30];
console.log(`The given array is : ${arr}`);
let result = matrixChainOrder(arr,1, arr.length - 1);
console.log(`The minimum number of  matrix chain multiplications : ${result}`);