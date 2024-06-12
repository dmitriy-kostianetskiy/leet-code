namespace Problem64 {
  function minPathSum(grid: number[][]): number {
    const n = grid.length;
    const m = grid[0].length;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (i === 0 && j === 0) {
          continue;
        }

        const top = i === 0 ? Infinity : grid[i - 1][j];
        const left = j === 0 ? Infinity : grid[i][j - 1];

        grid[i][j] = Math.min(top, left) + grid[i][j];
      }
    }

    return grid[n - 1][m - 1];
  }

  console.log(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]),
  );
}
