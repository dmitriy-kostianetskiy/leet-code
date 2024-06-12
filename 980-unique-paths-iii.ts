namespace Problem980 {
  function uniquePathsIII(grid: number[][]): number {
    let startRow = 0;
    let startCol = 0;
    let cellCount = 0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          startRow = i;
          startCol = j;
        }

        if (grid[i][j] !== -1) {
          cellCount++;
        }
      }
    }

    const visited = grid.map((item) => item.map(() => false));

    function dfs(row: number, col: number, count = 0): number {
      const gridRow = grid[row];

      if (gridRow === undefined) {
        return 0;
      }

      const gridCell = gridRow[col];

      if (gridCell === undefined) {
        return 0;
      }

      if (visited[row][col] || gridCell === -1) {
        return 0;
      }

      if (gridCell === 2) {
        return cellCount === count + 1 ? 1 : 0;
      }

      visited[row][col] = true;

      const newCount = count + 1;

      const result =
        dfs(row + 1, col, newCount) +
        dfs(row, col + 1, newCount) +
        dfs(row - 1, col, newCount) +
        dfs(row, col - 1, newCount);

      visited[row][col] = false;

      return result;
    }

    return dfs(startRow, startCol);
  }

  console.log(
    uniquePathsIII([
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 2, -1],
    ]),
  );
}
