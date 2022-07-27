/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var orangesRotting = function (mat) {
  const n = mat.length;
  if (n === 0) {
    return mat;
  }

  const q = [];
  const m = mat[0].length;

  const dist = Array(n);
  const visited = Array(n);
  for (let i = 0; i < n; i++) {
    dist[i] = new Array(m);
    dist[i].fill(1e9);
    visited[i] = new Array(m);
    visited[i].fill(false);

    for (let j = 0; j < m; j++) {
      if (mat[i][j] == 2) {
        q.push({ i, j, t: 0 });
      }
    }
  }

  while (q.length > 0) {
    const q1 = [q.shift()];

    while (q1.length > 0) {
      const { i, j } = q1.shift();

      if (mat[i][j] === 2) {
        dist[i][j] = 0;
      }

      if (i > 0 && mat[i - 1][j] === 1) {
        if (dist[i - 1][j] > dist[i][j] + 1) {
          dist[i - 1][j] = dist[i][j] + 1;
          q1.push({ i: i - 1, j });
        }
      }

      if (j > 0 && mat[i][j - 1] === 1) {
        if (dist[i][j - 1] > dist[i][j] + 1) {
          dist[i][j - 1] = dist[i][j] + 1;
          q1.push({ i, j: j - 1 });
        }
      }

      if (i + 1 < n && mat[i + 1][j] === 1) {
        if (dist[i + 1][j] > dist[i][j] + 1) {
          dist[i + 1][j] = dist[i][j] + 1;
          q1.push({ i: i + 1, j });
        }
      }

      if (j + 1 < m && mat[i][j + 1] === 1) {
        if (dist[i][j + 1] > dist[i][j] + 1) {
          dist[i][j + 1] = dist[i][j] + 1;
          q1.push({ i, j: j + 1 });
        }
      }
    }
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 1) {
        if (dist[i][j] >= 1e9) {
          return -1;
        }

        max = Math.max(max, dist[i][j]);
      }
    }
  }

  return max;
};
