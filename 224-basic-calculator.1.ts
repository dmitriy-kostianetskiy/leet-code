namespace Problem224_1 {
  function isDigit(char: string): boolean {
    return char >= '0' && char <= '9';
  }

  function calculate(s: string): number {
    const stack: [number, number][] = [];
    let sign = 1;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (isDigit(char)) {
        let operand = 0;
        let j = i;

        while (isDigit(s[j])) {
          operand = operand * 10 + +s[j];
          j++;
        }

        operand *= sign;

        i = j - 1;

        result += operand;
        sign = 1;

        continue;
      }

      if (char === '-') {
        sign = -1;
        continue;
      }

      if (char === '+') {
        sign = 1;
        continue;
      }

      if (char === '(') {
        stack.push([sign, result]);

        result = 0;
        sign = 1;
        continue;
      }

      if (char === ')') {
        const [signFromSack, operandFromStack] = stack.pop()!;

        result = operandFromStack + result * signFromSack;

        continue;
      }
    }

    return result;
  }

  // console.log(calculate('-512'));
  console.log(calculate('-512 + 512'));
  console.log(calculate('(-512 + 512) + 1'));
  console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
}
