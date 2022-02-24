const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 8;
const temp = arr[n-1];
for (let i = n - 1; i > 0; i--) {
  arr[i] = arr[i-1];
}
arr[0] = temp;
console.log(arr);