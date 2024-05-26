function numSquares(n: number): number {
  const dp = Array<number>(n + 1).fill(+Infinity);

  dp[0] = 0;

  for (let s = 1; s * s <= n; s++) {
    dp[s * s] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (dp[i] === 1) {
      continue;
    }

    for (let s = 1; s * s <= i; s++) {
      dp[i] = Math.min(dp[i - s * s] + dp[s * s], dp[i]);
    }
  }

  return dp[n];
}

console.log(numSquares(12));
console.log(numSquares(13));
console.log(numSquares(9999));

// [1, 4, 9, 16, 25, ...]

// n = 12

// 12

// dp[1] = 1;
// dp[2] = 2;
// dp[3] = 3;
// dp[4] =
