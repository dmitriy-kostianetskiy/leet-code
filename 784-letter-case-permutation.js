/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var letterCasePermutation = function (input) {
  const res = [];

  const rec = (s) => {
    if (s.length === input.length) {
      res.push(s);
    } else {
      const char = input[s.length];
      const lower = char.toLowerCase();
      const upper = char.toUpperCase();

      if (lower !== upper) {
        rec(s + lower);
        rec(s + upper);
      } else {
        rec(s + char);
      }
    }
  };

  rec('', 0);

  return res;
};
