function minimumRequired(coins, target) {
  if (coins === 0) {
    return 0;
  }
  let res = Number.MAX_VALUE;
  for (let i = 0; i < m; i++) {
    if (coins[i] <= V) {
      let sub_res = minimumRequired(coins, target - coins[i]);
      if (sub_res != Number.MAX_VALUE && sub_res + 1 < res) res = sub_res + 1;
    }
  }
  return res;
}

const coins = [1, 25, 2, 3, 4],
  target = 28;
const res = minimumRequired(coins, target);
console.log(res);
