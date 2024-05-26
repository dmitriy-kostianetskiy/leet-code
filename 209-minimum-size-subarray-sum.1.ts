namespace Problem209_1 {
  function buildPrefixArray(nums: number[]) {
    const prefixSum = nums.reduce<number[]>((acc, item) => {
      if (acc.length === 0) {
        acc.push(item);
        return acc;
      } else {
        acc.push(acc[acc.length - 1] + item);
      }

      return acc;
    }, []);

    return (l: number, r: number): number => prefixSum[r] - (l === 0 ? 0 : prefixSum[l - 1]);
  }

  function minSubArrayLen(target: number, nums: number[]): number {
    const getSum = buildPrefixArray(nums);

    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
      let l = 0;
      let r = Math.min(nums.length - 1 - i, min);

      while (r >= l) {
        const m = l + Math.floor((r - l) * 0.5);

        const sum = getSum(i, i + m);

        if (sum >= target) {
          r = m - 1;
          min = Math.min(min, m + 1);
        } else if (sum < target) {
          l = m + 1;
        }
      }
    }

    return min === Infinity ? 0 : min;
  }

  console.log(minSubArrayLen(7, [2, 3, 1]));
  console.log(minSubArrayLen(7, [2, 7]));
  console.log(minSubArrayLen(7, [1, 1, 1, 1, 1]));
  console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // [2,5,6,8,12,15]
  console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
}
