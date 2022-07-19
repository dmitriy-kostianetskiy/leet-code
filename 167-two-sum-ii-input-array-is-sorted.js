/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const search = (l, t) => {
    let r = nums.length - 1;

    while (r >= l) {
      const m = Math.floor(l + (r - l) / 2);
      const c = nums[m];

      if (t > c) {
        l = m + 1;
      } else if (t < c) {
        r = m - 1;
      } else {
        return m;
      }
    }

    return -1;
  };

  for (var i = 0; i < nums.length; i++) {
    const a = nums[i];
    const b = target - a;

    const index2 = search(i + 1, b);
    if (index2 !== -1) {
      return [i + 1, index2 + 1];
    }
  }
};
