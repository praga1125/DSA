function sumArray(arr) {
  let resultSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j += 1) {
      sum += arr[j];
      if (sum > resultSum) {
        resultSum = sum;
      }
    }
  }
  return resultSum;
}
const arr = [-2, 3, -5, 8, 2, -1, -5];
const result = sumArray(arr);
console.log(`The greatest sum in the array : ${result}`);
