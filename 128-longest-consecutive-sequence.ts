namespace Problem128 {
  function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);

    return nums.reduce((acc, num) => {
      if (set.has(num - 1)) {
        return acc;
      }

      let count = 1;

      while (set.has(num + 1)) {
        count++;
        num++;
      }

      return Math.max(acc, count);
    }, 0);
  }

  // console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
  // console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
  console.log(
    longestConsecutive([
      -1, 9, -3, -6, 7, -8, -6, 2, 9, 2, 3, -2, 4, -1, 0, 6, 1, -9, 6, 8, 6, 5, 2,
    ]),
  );
}
