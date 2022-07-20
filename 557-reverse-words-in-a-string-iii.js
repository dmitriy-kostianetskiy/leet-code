/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const reverseString = function (str) {
    let t = '';

    for (let i = 0; i < str.length; i++) {
      t += str[str.length - 1 - i];
    }

    return t;
  };

  let word = '';
  let res = '';

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];

    if (cur === ' ') {
      res += reverseString(word) + cur;
      word = '';
    } else {
      word += cur;
    }
  }

  res += reverseString(word);

  return res;
};
