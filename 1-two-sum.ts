namespace Problem1 {
  function twoSum(nums: number[], target: number): number[] {
    const acc = {};

    for (var i = 0; i < nums.length; i++) {
      const a = nums[i];
      const b = target - a;

      if (acc[b]) {
        return [i, acc[b] - 1];
      }

      acc[a] = i + 1;
    }

    return [];
  }
}
