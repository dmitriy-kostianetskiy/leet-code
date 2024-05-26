namespace Problem242 {
  function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
      return false;
    }

    const hash = {};

    for (let i = 0; i < s.length; i++) {
      const x = s[i];

      hash[x] = (hash[x] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
      const x = t[i];

      if (hash[x] > 0) {
        hash[x]--;
        continue;
      }

      return false;
    }

    return true;
  }
}
