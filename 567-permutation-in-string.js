/**
 * @param {string} s
 * @return {number}
 */

const toNum = (c) => c.charCodeAt(0);

const same = (s1, s2) => {
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }

  return true;
};

var checkInclusion = function (s1, s2) {
  const s1Map = new Array(26);

  for (let i = 0; i < s1.length; i++) {
    const c = toNum(s1[i]) - toNum('a');

    s1Map[c] = s1Map[c] ? s1Map[c] + 1 : 1;
  }

  for (let i = 0; i + s1.length - 1 < s2.length; i++) {
    const l = i;
    const r = i + s1.length - 1;
    const s2Map = new Array(26);

    for (let j = l; j <= r; j++) {
      const c = toNum(s2[j]) - toNum('a');

      s2Map[c] = s2Map[c] ? s2Map[c] + 1 : 1;
    }

    if (same(s1Map, s2Map)) {
      return true;
    }
  }

  return false;
};
