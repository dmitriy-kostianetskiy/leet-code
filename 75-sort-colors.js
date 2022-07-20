/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let pLeft = 0;
  let pRight = nums.length - 1;
  let pCurrent = 0;

  const swap = (index1, index2) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };

  while (pCurrent <= pRight) {
    if (nums[pCurrent] === 2) {
      swap(pCurrent, pRight--);
    } else if (nums[pCurrent] === 0) {
      swap(pCurrent, pLeft++);
      pCurrent = pLeft;
    } else {
      pCurrent++;
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([1, 2, 2, 0, 1]));
console.log(sortColors([2, 1, 2]));
console.log(sortColors([0, 0, 1]));
console.log(sortColors([0, 0, 1, 0, 1, 1]));
