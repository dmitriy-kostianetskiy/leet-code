function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(-1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      const diff = i - c;

      if (diff < 0 || dp[diff] === -1) {
        continue;
      }

      if (dp[i] === -1) {
        dp[i] = dp[diff] + 1;
      } else {
        dp[i] = Math.min(dp[i], dp[diff] + 1);
      }
    }
  }

  return dp[amount];
};


// O(N * Len (C)) = 1e4 * 12
//[1,2,5], 11

// 11 = 5 + 5 + 1

// dp[0] = 0;
// dp[1] = 1;
// dp[2] = 1;
// dp[3] = -1;
// dp[4] = -1;
// dp[5] = -1;
// dp[6] = -1;
// dp[7] = -1;
// dp[8] = -1;
// dp[9] = -1;
// dp[10] = -1;
// dp[11] = -1;
