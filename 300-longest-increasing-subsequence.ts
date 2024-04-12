function lengthOfLIS(nums: number[]): number {
  const n = nums.length;

  const m = new Array(n + 1);
  m.fill(-1);

  let maxL = 0;

  for (let i = 0; i < n; i++) {
    const xi = nums[i];

    // O(n^2)
    // let l = 1;

    // for (; l <= maxL + 1; l++) {
    //   if (m[l] === -1) {
    //     break;
    //   }

    //   const xm = nums[m[l]];

    //   if (xm >= xi) {
    //     break;
    //   }
    // }

    // O(n * log n)
    let lo = 1;
    let hi = maxL + 1;

    while (hi > lo) {
      const mid = lo + Math.floor((hi - lo) / 2);

      const xm = nums[m[mid]];
      if (xm >= xi) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    const l = lo;

    m[l] = i;

    if (l > maxL) {
      maxL = l;
    }
  }

  return maxL;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
