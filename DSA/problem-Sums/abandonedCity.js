// given input is
const arr = [1, 2, 3, 4, 5];
const n = arr.length;
const target = 7;
let pre = [0];

for (let i = 1; i < n; i++) {
  pre[i] = pre[i - 1] + arr[i];
}
if (pre[n] < target) {
  console.log(-1);
} else {
  let ans = Infinity;

  for (let i = 1; i <= n; i++) {
    let left = i,
      right = n,
      mid;

    // using binary search for find minimum value
    while (left <= right) {
      mid = (left + right) / 2;
      if (pre[mid] - pre[i - 1] >= target) {
        ans = Math.min(ans, mid - i + 1);
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  console.log(ans);
}
