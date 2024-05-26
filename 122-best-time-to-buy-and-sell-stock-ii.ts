function maxProfit(prices: number[]): number {
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      max += prices[i] - prices[i - 1];
    }
  }

  return max;
}

// i in [0, n]
// j in [i+1, n]

// dp[0] = [0,0,0,0,0,0]
// dp[1] = [0,0,0,0,0,0]
// dp[2] = [x,0,4,4,5,5]
// dp[3] = [x,x,4,0,1,0]
// dp[4] = [x,x,x,0,3,1]
// dp[5] = [x,x,x,x,0,0]
// dp[5] = [x,x,x,x,x,0]

console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// [7, 1, 5, 3, 6, 4]
