function addBinary(a: string, b: string): string {
  let p1 = a.length - 1;
  let p2 = b.length - 1;
  let div = 0;

  const toNum = (a: string) => (a === '1' ? 1 : 0);

  let result = '';

  while (p1 >= 0 || p2 >= 0 || div > 0) {
    const digit1 = toNum(a[p1] || '0');
    const digit2 = toNum(b[p2] || '0');

    const sum = digit1 + digit2 + div;

    div = Math.floor(sum / 2);

    result = (sum % 2) + result;

    p1--;
    p2--;
  }

  return result;
}

// console.log(addBinary('11', '1'));
// console.log(addBinary('0', '0'));
// console.log(addBinary('10', '1'));
console.log(addBinary('100', '110010'));
