namespace Problem132 {
  function minCut(s: string): number {
    const cache = new Map<number, boolean>();

    function getKey(start: number, end: number) {
      return start + end * 1e5;
    }

    function isPalindrome(start: number, end: number) {
      const key = getKey(start, end);

      const cached = cache.get(key);

      if (cached !== undefined) {
        return cached;
      }

      let l = start;
      let r = end;

      while (r > l) {
        if (s[l] !== s[r]) {
          return false;
        }

        l++;
        r--;
      }

      cache.set(key, true);

      return true;
    }

    function solve(cuts: number, startIndex = 0) {
      if (cuts === 0) {
        return isPalindrome(startIndex, s.length - 1);
      }

      for (let i = startIndex; i < s.length; i++) {
        if (isPalindrome(startIndex, i)) {
          if (solve(cuts - 1, i + 1)) {
            return true;
          }
        }
      }

      return false;
    }

    for (let i = 0; i < s.length; i++) {
      if (solve(i)) {
        return i;
      }
    }

    return s.length;
  }

  console.log(minCut('aab'));
  console.log(minCut('abc'));
  console.log(minCut('abcd'));
  console.log(
    minCut(
      'abcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdcabcdc',
    ),
  );
}
