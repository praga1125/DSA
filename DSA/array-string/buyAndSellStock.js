let maxProfit = (prices) => {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    profit = Math.max(profit, prices[i] - minPrice)
  }
  return profit;
}

let prices = [7,1,5,3,6,4];
console.log(`The given prices are : [${prices}]`);
let result = maxProfit(prices);
console.log(`The best time to sell a stock : ${result}`);