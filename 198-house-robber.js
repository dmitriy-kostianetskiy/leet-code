/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let a = 0,
    b = 0;

  for (let i = 0; i < nums.length; i++) {
    const t = nums[i];

    if (i % 2) {
      a = Math.max(a + t, b);
    } else {
      b = Math.max(b + t, a);
    }
  }

  return Math.max(a, b);
};
