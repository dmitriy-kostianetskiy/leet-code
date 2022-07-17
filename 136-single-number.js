/**
 * @param {number[]} nums
 * @return {number}
 * @description
 * If we xor two exactly the same numbers we will get 0.
 * For instance:
 * 3 = 0011
 *
 * 0011 xor 0011 = 0000
 *
 * Taking this into consideration we can go over the sequence and xor all the items eventually get the answer.
 */
var singleNumber = function (nums) {
  return nums.reduce((acc, item) => acc ^ item, 0);
};

// tests
console.assert(singleNumber([2, 2, 1]) === 1);
