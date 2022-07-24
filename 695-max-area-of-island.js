var maxAreaOfIsland = function (grid) {
  let m = 0;

  const dfs = (i, j) => {
    if (
      !(i >= 0 && i < grid.length && j >= 0 && j < grid[i].length) ||
      grid[i][j] === 3
    ) {
      return 0;
    }

    const t = grid[i][j];
    grid[i][j] = 3;

    if (t === 1) {
      return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    }

    return 0;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 3) {
        m = Math.max(m, dfs(i, j));
      }
    }
  }

  return m;
};
