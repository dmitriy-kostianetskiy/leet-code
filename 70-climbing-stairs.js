/**
 * @param {number} n
 * @return {number}
 * @description fibonacci number
 */
var climbStairs = function (n) {
  let p1 = 1;
  let p2 = 1;

  for (let i = 2; i <= n; i++) {
    const t = p2;
    p2 = p1 + p2;
    p1 = t;
  }

  return p2;
};
