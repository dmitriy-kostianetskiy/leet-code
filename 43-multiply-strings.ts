function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const digits1 = num1.split('').map((x) => +x);
  const digits2 = num2.split('').map((x) => +x);

  let p1 = digits1.length - 1;
  let p2 = digits2.length - 1;

  let result: number[] = [];

  for (let i = p1; i >= 0; i--) {
    const digit1 = digits1[i];

    let p = 0;
    let j = p2;

    while (j >= 0 || p !== 0) {
      const digit2 = digits2[j] || 0;
      const resultIndex = p1 - i + (p2 - j);

      const res = digit1 * digit2 + p + (result[resultIndex] || 0);
      p = Math.floor(res / 10);

      const newValue = res % 10;
      result[resultIndex] = newValue;
      j--;
    }
  }

  return result.reverse().join('');
}

console.log(multiply('2', '3'));
console.log(multiply('123', '456'));
console.log(multiply('0', '456'));
console.log(multiply('0', '0'));
console.log(multiply('0', '1'));
console.log(multiply('123', '1'));
