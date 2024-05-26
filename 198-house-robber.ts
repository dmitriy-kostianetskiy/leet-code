function rob(nums: number[]): number {
  const n = nums.length;

  const dp = new Array(n);
  
  for (let i = 0; i < n; i++) {
      if (i == 0) {
          dp[i] = nums[i];
          continue;
      }

      if (i == 1) {
          dp[i] = Math.max(nums[i], dp[i - 1]);
          continue;
      }

      dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
  }

  return dp[n-1];
};

// [1,2,3,1]
// dp[0] = 1
// dp[1] = 2


// [10, 400, 10, 1, 10, 1]
