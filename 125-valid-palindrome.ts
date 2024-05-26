namespace Problem125 {
  function isAlphaNumeric(char: string): boolean {
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
  }

  function isPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;

    while (r > l) {
      const left = s[l].toLowerCase();
      const right = s[r].toLowerCase();

      if (!isAlphaNumeric(left)) {
        l++;
        continue;
      }

      if (!isAlphaNumeric(right)) {
        r--;
        continue;
      }

      if (left !== right) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }

  console.log(isPalindrome('A man, a plan, a canal: Panama'));
}
