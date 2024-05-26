namespace Problem228 {
  function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) {
      return [];
    }

    let ranges = [[0, 0]];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] + 1 === nums[i]) {
        ranges[ranges.length - 1][1] = i;
      } else {
        ranges.push([i, i]);
      }
    }

    return ranges.map(([l, r]) => (l === r ? `${nums[l]}` : `${nums[l]}->${nums[r]}`));
  }

  console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
}
