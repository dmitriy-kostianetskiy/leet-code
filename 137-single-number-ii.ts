namespace Problem137 {
  /**
   * @description
   * Since all numbers except one are repeating 3 times we can sum-up all 1 bits column by column
   * for example for array [2,2,2,1]
   *
   * 2 = 0010
   * 2 = 0010
   * 2 = 0010
   * 1 = 0001
   * --------
   * s = 0031
   *
   * we now can see that the bit #2 is can be divided by 3 which means it will be 0 in the answer
   * while bit #1 has 1 which is can't be divided by 3 so it should be 1 in the answer
   *
   */
  function singleNumber(nums: number[]): number {
    let answer = 0;

    for (let i = 0; i < 32; i++) {
      let sum = 0;

      for (const num of nums) {
        sum += (num >> i) & 1;
      }

      if (sum % 3 !== 0) {
        answer |= 1 << i;
      }
    }

    return answer;
  }

  console.log(singleNumber([2, 2, 2, 1]));
  console.log(singleNumber([2, 2, 2, 10, 10, 10, 3]));
}
