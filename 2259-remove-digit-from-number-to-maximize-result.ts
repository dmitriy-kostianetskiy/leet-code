namespace Problem2259 {
  function removeDigit(number: string, digit: string): string {
    const chars = number.split('');

    let max = 0n;

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === digit) {
        const newNumber = BigInt(chars.filter((_, index) => index !== i).join(''));

        if (newNumber > max) {
          max = BigInt(newNumber);
        }
      }
    }

    return max.toString();
  }

  removeDigit('1231', '1');
}
