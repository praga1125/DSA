function minimumNumberOfCoins(coins, amount) {
	if (!amount) return 0;
	let dp = new Array(amount + 1).fill(Number.MAX_VALUE);
	dp[0] = 0;
	for (let i = 0; i < coins.length; i++) {
		let coin = coins[i];
		for (let j = 1; j <= amount; j++) {
			if (coin <= j) {
				let diff = dp[j - coin];
				if (diff !== -1 && diff + 1 < dp[j]) dp[j] = 1 + diff;
			}
		}
	}
	return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}

const coins = [1, 2, 5];
console.log(`The given coins are : ${coins}`);
const amount = 8;
console.log(`The given amount is : ${amount}`);
const result = minimumNumberOfCoins(coins, amount);
console.log(`The minimum number combination of coins : ${result}`);
