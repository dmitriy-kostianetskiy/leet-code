/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let d = [];

  for (let i = 0; i < m; i++) {
    d[i] = [];

    for (let j = 0; j < n; j++) {
      if (j === 0 || i === 0) {
        d[i][j] = 1;
      } else {
        d[i][j] = d[i - 1][j] + d[i][j - 1];
      }
    }
  }

  return d[m - 1][n - 1];
};

// tests
console.assert(uniquePaths(3, 2) === 3);

console.assert(uniquePaths(3, 7) === 28);
