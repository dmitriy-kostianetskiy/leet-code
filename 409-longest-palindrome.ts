/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const m = new Map();

  for (let i = 0; i < s.length; i++) {
    const c = m.get(s[i]) || 0;

    m.set(s[i], c + 1);
  }

  let t = 0;
  let hasMiddle = false;

  m.forEach((value, key) => {
    t += Math.floor(value / 2);
    if (value % 2 === 1) {
      hasMiddle = true;
    }
  });

  return t * 2 + (hasMiddle ? 1 : 0);
};
