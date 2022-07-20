/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];

    if (!map[x]) {
      map[x] = 0;
    }

    if (++map[x] > Math.floor(nums.length / 2)) {
      return x;
    }
  }
};

// test
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
