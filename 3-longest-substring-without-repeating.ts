namespace Problem3 {
  function lengthOfLongestSubstring(s: string): number {
    let l = 0;
    let r = 0;
    let max = 0;

    const chars = new Set<string>();

    while (r < s.length) {
      const next = s[r];

      if (chars.has(next)) {
        chars.delete(s[l]);
        l++;
      } else {
        chars.add(s[r]);
        r++;

        max = Math.max(max, chars.size);
      }
    }

    return max;
  }

  console.log(lengthOfLongestSubstring(''));
  console.log(lengthOfLongestSubstring('abcabcbb'));
  console.log(lengthOfLongestSubstring('bbbbb'));
  console.log(lengthOfLongestSubstring('pwwkew'));
}
