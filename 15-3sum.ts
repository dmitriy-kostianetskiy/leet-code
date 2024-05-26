namespace Problem15 {
  function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const res: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }

      let j = i + 1;
      let k = nums.length - 1;

      while (k > j) {
        const sum = nums[i] + nums[j] + nums[k];

        if (sum > 0) {
          k--;
        } else if (sum < 0) {
          j++;
        } else {
          res.push([nums[i], nums[j], nums[k]]);

          do {
            j++;
          } while (k > j && nums[j] === nums[j - 1]);
        }
      }
    }

    return res;
  }

  console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
  console.log(JSON.stringify(threeSum([0, 1, 1])));
  console.log(JSON.stringify(threeSum([0, 0, 0])));
  console.log(JSON.stringify(threeSum([-1, 0, 1, 0])));
}
