/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const swap = (i, j) => {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  };

  let numberOfZeroes = 0;

  nums.forEach((x, i) => {
    if (x !== 0) {
      swap(numberOfZeroes++, i);
    }
  });
};
