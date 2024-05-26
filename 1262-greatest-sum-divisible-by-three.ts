function maxSumDivThree(nums: number[]): number {
  const n = nums.length;
  const cache = Array.from(new Array(n), () => new Array(3).fill(-Infinity))

  function dfs(index = 0, reminder = 0) {
      if (index === n) {
          return reminder ? -Infinity : 0;
      }

      if (cache[index][reminder] !== -Infinity) {
          return cache[index][reminder];
      }

      return cache[index][reminder] = Math.max(
          nums[index] + dfs(index + 1, (reminder + nums[index]) % 3),
          dfs(index + 1, reminder)
      );
  }

  return dfs();
};
