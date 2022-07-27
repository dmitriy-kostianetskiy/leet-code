/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  const rec = (tmp, s, k) => {
    if (k === 0) {
      res.push([...tmp]);
    } else {
      for (let i = s; i < n; i++) {
        tmp.push(i + 1);
        rec(tmp, i + 1, k - 1);
        tmp.pop();
      }
    }
  };

  rec([], 0, k);

  return res;
};
