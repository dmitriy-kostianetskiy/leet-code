namespace Problem53 {
  function maxSubArray(nums: number[]): number {
    let d = -Infinity;
    let max = -Infinity;

    for (const num of nums) {
      d = Math.max(d + num, num);
      max = Math.max(d, max);
    }

    return max;
  }

  console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
}
