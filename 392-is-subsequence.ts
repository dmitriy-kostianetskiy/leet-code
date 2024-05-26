namespace Problem392 {
  function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
      if (s[i] === t[j]) {
        i++;
      }

      j++;
    }

    return i === s.length;
  }

  console.log(isSubsequence('abc', 'ahbgdc'));
  console.log(isSubsequence('axc', 'ahbgdc'));
}
