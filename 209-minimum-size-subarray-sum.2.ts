namespace Problem209_2 {
  function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0;
    let r = 0;

    let currentSum = nums[0];
    let min = Infinity;

    while (r >= l) {
      const sum = currentSum;

      if (sum < target) {
        if (r === nums.length - 1) {
          break;
        }

        r++;
        currentSum += nums[r];
      } else if (sum >= target) {
        min = Math.min(min, r - l + 1);

        currentSum -= nums[l];
        l++;
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
