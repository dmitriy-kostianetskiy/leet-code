namespace Problem162 {
  function findPeakElement(nums: number[]): number {
    const n = nums.length;

    if (n === 1) {
      return 0;
    }

    if (nums[0] > nums[1]) {
      return 0;
    }

    if (nums[n - 1] > nums[n - 2]) {
      return n - 1;
    }

    let l = 0;
    let r = n - 1;

    while (r >= l) {
      const m = l + Math.floor((r - l) / 2);

      if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) {
        return m;
      }

      if (nums[m] < nums[m - 1]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return -1;
  }

  console.log(findPeakElement([1, 2, 3, 1]));
  console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
}
