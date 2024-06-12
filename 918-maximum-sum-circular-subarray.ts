namespace Problem918 {
  function maxSubarraySumCircular(nums: number[]): number {
    let dMin = +Infinity;
    let dMax = -Infinity;
    let min = +Infinity;
    let max = -Infinity;
    let total = 0;

    for (const num of nums) {
      total += num;

      dMin = Math.min(dMin + num, num);
      min = Math.min(dMin, min);

      dMax = Math.max(dMax + num, num);
      max = Math.max(dMax, max);
    }

    return Math.max(max, total === min ? max : total - min);
  }

  console.log(maxSubarraySumCircular([5, -1000, 2, 5]));
  console.log(maxSubarraySumCircular([-1, -2, -3]));
  console.log(maxSubarraySumCircular([1, 2, -3]));
}
