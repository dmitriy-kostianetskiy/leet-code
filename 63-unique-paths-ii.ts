namespace Problem63 {
  function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const dp = obstacleGrid.map((item) => item.map(() => 0));

    for (let i = 0; i < obstacleGrid.length; i++) {
      for (let j = 0; j < obstacleGrid[i].length; j++) {
        if (obstacleGrid[i][j] === 1) {
          dp[i][j] = 0;
          continue;
        }

        if (i === 0 && j === 0) {
          dp[i][j] = 1;
          continue;
        }

        if (i === 0) {
          dp[i][j] = dp[i][j - 1];
          continue;
        }

        if (j === 0) {
          dp[i][j] = dp[i - 1][j];
          continue;
        }

        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }

    return dp[dp.length - 1][dp[0].length - 1];
  }

  console.log(
    uniquePathsWithObstacles([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ]),
  );

  console.log(
    uniquePathsWithObstacles([
      [0, 1],
      [0, 0],
    ]),
  );
}
