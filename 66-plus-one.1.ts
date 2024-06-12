namespace Problem66_1 {
  function plusOne(digits: number[]): number[] {
    let p = digits.length - 1;
    let div = 1;

    while (p >= 0 || div > 0) {
      const sum = (digits[p] || 0) + div;

      div = Math.floor(sum / 10);

      if (p < 0) {
        digits.unshift(sum % 10);
      } else {
        digits[p] = sum % 10;
      }

      p--;
    }

    return digits;
  }

  console.log(plusOne([1, 2, 3]));
  console.log(plusOne([9, 9]));
  console.log(plusOne([0]));
}
