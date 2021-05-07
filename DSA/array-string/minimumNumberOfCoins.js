function minimumNumberOfCoins(coins, amount, dp={}){
    let min=Infinity,count;
    if (amount in dp) {
      return dp[amount];
    }
    if (amount < 0) {
      return -1;
    }
    if (amount==0) {
      return 0;
    }
    for (let coin of coins) {
      count = minimumNumberOfCoins(coins,amount-coin,dp);
      if (count!=-1){ 
      min=Math.min(min,1+count);
      }
    }
    return (min == Infinity) ? dp[amount] = -1 : dp[amount] = min; 
}

const coins = [1, 2, 5];
console.log(`The given coins are : ${coins}`);
const amount = 8;
console.log(`The given amount is : ${amount}`);
const result = minimumNumberOfCoins(coins, amount);
console.log(`The minimum number combination of coins : ${result}`);