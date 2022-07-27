/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const n = mat.length;
  if (n === 0) {
    return mat;
  }

  const m = mat[0].length;
  const dist = Array(n);
  for (let i = 0; i < n; i++) {
    dist[i] = new Array(m);
    dist[i].fill(1e9);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
      } else {
        if (i > 0) {
          dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
        }
        if (j > 0) {
          dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
        }
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
      } else {
        if (i < n - 1) {
          dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
        }
        if (j < m - 1) {
          dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
        }
      }
    }
  }

  return dist;
};
