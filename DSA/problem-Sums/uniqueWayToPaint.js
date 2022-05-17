function waysToPaint(n) {
  console.log(`The given input is : ${n}`)
  let same = 6,
    diff = 6,
    ans;
  for (let i = 2; i <= n; i++) {
    let sameTmp = 3 * same + 2 * diff;
    let diffTmp = 2 * same + 2 * diff;
    same = sameTmp % 1000000007;
    diff = diffTmp % 1000000007;
  }
  ans = (same+diff) % 1000000007;
  return ans;
}

const n = 5000;
const res = waysToPaint(n);
console.log(`The number of ways to paint : ${res}`);
