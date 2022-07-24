function addStrings(num1: string, num2: string): string {
  let p = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  let result = '';

  while (p1 >= 0 || p2 >= 0) {
    const last1 = +num1[p1--] || 0;
    const last2 = +num2[p2--] || 0;

    const sum = p + last1 + last2;

    p = Math.floor(sum / 10);

    result = (sum % 10).toFixed(0) + result;
  }

  if (p > 0) {
    result = p.toFixed(0) + result;
  }

  return result;
}

console.log(addStrings('11', '123'));
console.log(addStrings('50', '50'));
console.log(addStrings('456', '77'));
console.log(addStrings('0', '0'));
