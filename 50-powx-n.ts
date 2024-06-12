namespace Problem50 {
  function myPow(x: number, n: number): number {
    if (n === 0) {
      return 1;
    }

    if (n === 1) {
      return x;
    }

    if (n === -1) {
      return 1 / x;
    }

    const p = myPow(x, Math.trunc(n / 2));

    if (n % 2 === 0) {
      return p * p;
    }

    return p * p * (n < 0 ? 1 / x : x);
  }

  // console.log(myPow(2, 0));
  // console.log(myPow(2, 1));
  // console.log(myPow(2, 2));
  // console.log(myPow(2, 3));
  // console.log(myPow(1, 3000000000));
  console.log(myPow(34.00515, -3));
}
