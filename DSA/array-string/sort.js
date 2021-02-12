function sorted(arr) {
  let n = arr.length - 1;
  let first = 0;
  for (let i = 0; i <= n; i += 1) {
    if (arr[i] === 0) {
      [arr[first], arr[i]] = [arr[i], arr[first]];
      first += 1;
    } else if (arr[i] === 2) {
      [arr[n], arr[i]] = [arr[i], arr[n]];
      n -= 1;
      i -= 1;
    }
  }
  console.log(arr);
}
const arr = [1, 2, 0, 1, 2, 1];
sorted(arr);
