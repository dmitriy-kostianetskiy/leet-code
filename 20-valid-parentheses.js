/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const a = [];
  for (var i = 0; i < s.length; i++) {
    const t = s[i];

    if (t === '(' || t === '[' || t === '{') {
      a.push(t);
      continue;
    }

    if (a.length === 0) {
      return false;
    }

    const t1 = a.pop();

    if (t === ')' && t1 !== '(') {
      return false;
    }

    if (t === ']' && t1 !== '[') {
      return false;
    }

    if (t === '}' && t1 !== '{') {
      return false;
    }
  }

  return a.length === 0;
};
