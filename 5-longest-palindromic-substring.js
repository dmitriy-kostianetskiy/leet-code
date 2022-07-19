/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let s1 = '';
  let d = new Array(s.length);
  let max = 1;
  let maxL = 0;
  let maxR = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isPaly(s, i, j)) {
        if (j - i + 1 > max) {
          max = j - i;
          maxL = i;
          maxR = j;
        }
      }
    }
  }

  return s.substring(maxL, maxR + 1);
};

function isPaly(s, l, r) {
  while (r > l) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
}
