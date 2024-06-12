namespace Problem136 {
  /**
   * @description
   * If we xor two exactly the same numbers we will get 0.
   * For instance:
   * 3 = 0011
   *
   * 0011 xor 0011 = 0000
   *
   * Taking this into consideration we can go over the sequence and xor all the items eventually get the answer.
   */
  function singleNumber(nums: number[]): number {
    return nums.reduce((acc, item) => acc ^ item, 0);
  }

  // tests
  console.assert(singleNumber([2, 2, 1]) === 1);
}
