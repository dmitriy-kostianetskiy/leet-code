namespace Problem205 {
  function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) {
      return false;
    }

    const sm = new Map<string, string>();
    const tm = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
      const sc = s[i];
      const tc = t[i];

      if (tm.has(tc) && tm.get(tc) !== sc) {
        return false;
      }

      if (sm.has(sc) && sm.get(sc) !== tc) {
        return false;
      }

      sm.set(sc, tc);
      tm.set(tc, sc);
    }

    return true;
  }
}
