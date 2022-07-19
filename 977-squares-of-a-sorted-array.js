/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = nums.length - 1;

  const res = new Array(nums.length);

  while (i != -1) {
    const lv = nums[l] * nums[l];
    const rv = nums[r] * nums[r];

    if (lv > rv) {
      res[i] = lv;
      l++;
    } else {
      res[i] = rv;
      r--;
    }

    i--;
  }

  return res;
};
