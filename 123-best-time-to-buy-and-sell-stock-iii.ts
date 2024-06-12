namespace Problem123 {
  function maxProfit(prices: number[]): number {
    const MAX_TRANSACTIONS = 2;

    const dp: number[][][] = prices.map(() =>
      [0, 1].map(() => Array(MAX_TRANSACTIONS + 1).fill(-1)),
    );

    function dfs(index = 0, buy = 0, transactionLeft = MAX_TRANSACTIONS): number {
      if (transactionLeft === 0 || index === prices.length) {
        return 0;
      }

      if (dp[index][buy][transactionLeft] !== -1) {
        return dp[index][buy][transactionLeft];
      }

      let profit = 0;

      if (buy === 1) {
        const buyProfit = dfs(index + 1, 0, transactionLeft) - prices[index];
        const skipProfit = dfs(index + 1, 1, transactionLeft);

        profit = Math.max(buyProfit, skipProfit);
      } else {
        const sellProfit = dfs(index + 1, 1, transactionLeft - 1) + prices[index];
        const skipProfit = dfs(index + 1, 0, transactionLeft);

        profit = Math.max(sellProfit, skipProfit);
      }

      return (dp[index][buy][transactionLeft] = profit);
    }

    return dfs(0, 1);
  }

  console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
  console.log(maxProfit([1, 2, 3, 4, 5]));
  console.log(maxProfit([7, 6, 4, 3, 1]));
}
