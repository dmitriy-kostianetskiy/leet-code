namespace Problem172 {
  function trailingZeroes(n: number): number {
    return n == 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
  }

  for (let i = 25; i <= 25; i++) {
    console.log(i, trailingZeroes(i));
  }
}
