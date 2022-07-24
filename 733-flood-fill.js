/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const c = image[sr][sc];
  let v = new Array(51);

  for (let i = 0; i < 51; i++) {
    v[i] = new Array(51);
  }

  const dfs = (i, j) => {
    if (!(i >= 0 && i < image.length && j >= 0 && j < image[i].length)) {
      return;
    }

    if (v[i][j]) {
      return;
    }

    v[i][j] = true;

    if (image[i][j] === c) {
      image[i][j] = color;

      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };

  dfs(sr, sc);

  return image;
};
