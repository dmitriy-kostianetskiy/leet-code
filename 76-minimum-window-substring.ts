namespace Problem76 {
  function isMapIncludesOtherMap(windowMap: Map<string, number>, patternMap: Map<string, number>) {
    for (let [key, value] of patternMap.entries()) {
      const windowMapValue = windowMap.get(key);
      if (windowMapValue === undefined || windowMapValue < value) {
        return false;
      }
    }

    return true;
  }

  function addCharToMap(char: string, map: Map<string, number>) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  function deleteCharFromMap(char: string, map: Map<string, number>) {
    const currentValue = map.get(char);
    if (!currentValue) {
      return;
    }

    map.set(char, currentValue - 1);
  }

  function minWindow(s: string, t: string): string {
    let l = 0;
    let r = 0;
    let min = '';

    const windowMap = new Map<string, number>();

    const tMap = new Map<string, number>();
    t.split('').forEach((char) => addCharToMap(char, tMap));

    while (r <= s.length) {
      if (!isMapIncludesOtherMap(windowMap, tMap)) {
        addCharToMap(s[r], windowMap);
        r++;
        continue;
      } else {
        if (min === '' || r - l < min.length) {
          min = s.substring(l, r);
        }

        deleteCharFromMap(s[l], windowMap);
        l++;
      }
    }

    return min;
  }

  console.log(minWindow('ADOBECODEBANC', 'ABC'));
  console.log(minWindow('a', 'a'));
  console.log(minWindow('a', 'aa'));
}

// "ABC"
// "BANC"
