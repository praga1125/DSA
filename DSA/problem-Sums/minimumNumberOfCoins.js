const minCoins = (coins,m,V) => {
  let table = new Array(V + 1);
  for (let i = 0; i < V + 1; i++) {
    table[i] = 0;
  }
  for (let i = 1; i <= V; i++) {
    table[i] = Number.MAX_VALUE;
  }
  for (let i = 1; i <= V; i++) {
    for (let j = 0; j < m; j++)
      if (coins[j] <= i) {
        let sub_res = table[i - coins[j]];
        if (sub_res != Number.MAX_VALUE && sub_res + 1 < table[i])
          table[i] = sub_res + 1;
      }
  }

  if (table[V] == Number.MAX_VALUE) return -1;

  return table[V];
};

let coins = [9, 6, 5, 1] ;
let M = coins.length;
let V = 11;
let res = minCoins(coins, M, V);
console.log(res);