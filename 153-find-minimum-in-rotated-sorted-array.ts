namespace Problem153 {
  function findKLog(nums: number[]) {
    const n = nums.length;

    if (n === 1) {
      return 0;
    }

    if (nums[0] < nums[n - 1]) {
      return 0;
    }

    if (nums[n - 2] > nums[n - 1]) {
      return n - 1;
    }

    if (nums[0] > nums[1]) {
      return 1;
    }

    let l = 0;
    let r = n - 1;

    while (r >= l) {
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] < nums[m - 1] && nums[m] < nums[m + 1]) {
        return m;
      }

      if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) {
        if (nums[m - 1] > nums[m + 1]) {
          return m + 1;
        } else {
          return m - 1;
        }
      }

      const diffL = Math.abs(nums[m] - nums[l]);
      const diffR = Math.abs(nums[m] - nums[r]);

      if (diffL > diffR) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return l;
  }

  function findMin(nums: number[]): number {
    const index = findKLog(nums);

    return nums[index];
  }

  console.log(findMin([3, 4, 5, 1, 2]));
  console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
  console.log(findMin([11, 13, 15, 17]));
}
