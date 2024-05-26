namespace Problem224_2 {
  function calculate(s: string): number {
    function isDigit(char: string): boolean {
      return char >= '0' && char <= '9';
    }

    function getOperand(index: number): [number, number] {
      let operand = 0;

      while (isDigit(s[index])) {
        operand = operand * 10 + +s[index];
        index++;
      }

      return [index, operand];
    }

    function solve(index: number) {
      let sign = 1;
      let result = 0;

      while (index < s.length) {
        const char = s[index];

        if (isDigit(char)) {
          const [newIndex, operand] = getOperand(index);

          index = newIndex;

          result += operand * sign;
          sign = 1;
          continue;
        }

        if (char === '-') {
          sign = -1;
          index++;
          continue;
        }

        if (char === '+') {
          sign = 1;
          index++;
          continue;
        }

        if (char === '(') {
          const [newIndex, interimResult] = solve(index + 1);

          index = newIndex;
          result += interimResult * sign;
          sign = 1;
          continue;
        }

        if (char === ')') {
          return [index + 1, result];
        }

        index++;
      }

      return [index, result];
    }

    const [, result] = solve(0);

    return result;
  }

  // console.log(calculate('-512'));
  console.log(calculate('-512 + 512'));
  console.log(calculate('(-512 + 512) + 1'));
  console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
}
