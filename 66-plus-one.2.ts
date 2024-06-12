namespace Problem66_2 {
  function plusOne(digits: number[]): number[] {
    return (BigInt(digits.join('')) + 1n).toString().split('').map(Number);
  }

  console.log(plusOne([1, 2, 3]));
  console.log(plusOne([9, 9]));
  console.log(plusOne([0]));
}
