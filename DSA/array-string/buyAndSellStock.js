let maxProfit = (prices) => {
    let min = Number.MAX_SAFE_INTEGER; 
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    console.log(`The best time to buy a stock : ${min}`);
    return max;
}

let prices = [5, 3, 2, 1, 9, 3, 10];
let result = maxProfit(prices);
console.log(`The best time to sell a stock : ${result}`);