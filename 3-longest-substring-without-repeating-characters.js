/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const t = new Map();
  let w = 0;
  let wMax = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (t.has(c)) {
      const v = t.get(c);
      t.clear();
      i = v;
      w = 0;
    } else {
      t.set(c, i);
      w++;
      wMax = Math.max(wMax, w);
    }
  }

  return wMax;
};
