namespace Problem139 {
  function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length;

    const dp = Array<boolean>(n + 1).fill(false);

    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
      for (const word of wordDict) {
        const startIndex = i - word.length;
        const endIndex = i;

        if (startIndex < 0) {
          continue;
        }

        const w = s.slice(startIndex, endIndex);

        if (w === word && dp[startIndex]) {
          dp[i] = true;
          break;
        }
      }
    }

    return dp[n];
  }

  console.log(wordBreak('leetcode', ['leet', 'code']));
}
