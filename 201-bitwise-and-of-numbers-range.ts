namespace Problem201 {
  function rangeBitwiseAnd(left: number, right: number): number {
    let answer = 0;
    let diff = true;

    for (let i = 31; i >= 0; i--) {
      const leftBit = (left >> i) & 1;
      const rightBit = (right >> i) & 1;

      if (leftBit && rightBit && diff) {
        answer |= 1 << i;
      }

      if (rightBit && !leftBit) {
        diff = false;
      }
    }

    return answer;
  }

  console.log(rangeBitwiseAnd(5, 7));
  console.log(rangeBitwiseAnd(1, 2147483647));
  console.log(rangeBitwiseAnd(2147483646, 2147483647));

  // 0001

  // 0111 = 7
  // 0101 = 5

  // 0100

  // 0101 = 5
  // 0010 = 2

  // 00

  // a = 0101

  // 0111 1111 1111 1111 1111 1111 1111 1111
  // 0111 1111 1111 1111 1111 1111 1111 1110
}
