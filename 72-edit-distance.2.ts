namespace Problem72_2 {
  function minDistance(word1: string, word2: string): number {
    const n = word1.length;
    const m = word2.length;

    const dp: number[][] = Array.from(Array(n + 1), () => Array(m + 1).fill(-1));

    for (let i = 0; i <= n; i++) {
      dp[i][0] = i;
    }

    for (let i = 0; i <= m; i++) {
      dp[0][i] = i;
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        }
      }
    }

    return dp[n][m];
  }

  console.log(minDistance('ab', 'ab'));
  console.log(minDistance('ab', 'a'));
  console.log(minDistance('ab', 'b'));
  console.log(minDistance('a', 'abc'));
  console.log(minDistance('ab', ''));
  console.log(minDistance('ab', 'cd'));
  console.log(minDistance('horse', 'ros'));
  console.log(minDistance('intention', 'execution'));
}
