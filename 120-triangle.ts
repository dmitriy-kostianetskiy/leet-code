namespace Problem120 {
  function minimumTotal(triangle: number[][]): number {
    const dp: number[][] = [];

    dp[0] = [triangle[0][0]];

    for (let i = 1; i < triangle.length; i++) {
      dp[i] = [];

      for (let j = 0; j < triangle[i].length; j++) {
        const left = j - 1;
        const right = j;

        const leftVal = left >= 0 ? dp[i - 1][left] : Infinity;
        const rightVal = right < dp[i - 1].length ? dp[i - 1][right] : Infinity;

        dp[i][j] = Math.min(leftVal, rightVal) + triangle[i][j];
      }
    }

    return Math.min(...dp[dp.length - 1]);
  }
}
