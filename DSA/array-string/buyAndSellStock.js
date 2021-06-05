let maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let curr = prices[i]
        if (curr < min) {
            min = curr;
        } else if (curr - min > profit) {
            profit = curr - min;
        }
  }
  return profit;
}

let prices = [7,1,5,3,6,4];
console.log(`The given prices are : [${prices}]`);
let result = maxProfit(prices);
console.log(`The best time to sell a stock : ${result}`);