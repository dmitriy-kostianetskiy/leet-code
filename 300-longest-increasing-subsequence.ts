function lengthOfLIS(nums: number[]): number {
  const n = nums.length;

  const m = new Array(n + 1);
  m.fill(-1);

  let maxL = 0;

  for (let i = 0; i < n; i++) {
    const x = nums[i];

    let l = 1;
    let r = maxL + 1;

    while (r > l) {
      const mid = l + Math.floor((r - l) / 2);

      if (nums[m[mid]] >= x) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }

    m[l] = i;

    maxL = Math.max(l, maxL);
  }

  return maxL;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
