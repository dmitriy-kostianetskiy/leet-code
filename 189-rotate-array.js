/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  if (k == 0) {
    return;
  }

  const a = new Array(...nums);

  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = a[i];
  }

  console.log(nums);
};
