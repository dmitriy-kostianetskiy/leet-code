namespace Problem1071 {
  function gcdOfStrings(str1: string, str2: string): string {
    let len = str2.length;

    while (len > 0) {
      if (str1.length % len !== 0 || str2.length % len !== 0) {
        len--;
        continue;
      }

      const gcd = str2.slice(0, len);

      const regEx = new RegExp(`^(${gcd})+$`);

      if (str1.match(regEx) && str2.match(regEx)) {
        return gcd;
      }

      len--;
    }

    return '';
  }

  console.log(gcdOfStrings('ABAB', 'ABABABAB'));
}
