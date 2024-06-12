namespace Problem9 {
  function isPalindrome(x: number): boolean {
    if (x < 0) {
      return false;
    }

    let count = Math.trunc(Math.log10(x));

    while (count >= 1) {
      const t = Math.pow(10, count);
      const right = x % 10;
      const left = Math.trunc(x / t);

      if (right != left) {
        return false;
      }

      x = Math.trunc((x % t) / 10);

      count -= 2;
    }

    return true;
  }
}
