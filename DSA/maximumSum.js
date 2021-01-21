function maxSum(arr) {
  let maximum = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if ((sum + arr[i]) > 0) {
      sum += arr[i];
    }
    if (sum > maximum) {
      maximum = sum;
    }
  }
  return maximum;
}
const arr = [-1, 3, 4, -5, 7, 1, -4];
const result = maxSum(arr);
console.log(result);
