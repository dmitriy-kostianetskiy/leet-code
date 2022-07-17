/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const value = nums[middle];

    if (target > value) {
      left = middle + 1;
    } else if (target < value) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};
