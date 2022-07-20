/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const swap = (i, j) => {
    const t = s[i];
    s[i] = s[j];
    s[j] = t;
  };

  let l = 0,
    r = s.length - 1;
  while (r > l) {
    swap(l, r);

    l++;
    r--;
  }
};
