namespace Problem200 {
  function numIslands(grid: string[][]): number {
    function discoverIsland(i: number, j: number) {
      if (grid[i][j] === '0') {
        return false;
      }

      grid[i][j] = '0';

      if (i !== 0) {
        discoverIsland(i - 1, j);
      }

      if (j !== 0) {
        discoverIsland(i, j - 1);
      }

      if (i !== grid.length - 1) {
        discoverIsland(i + 1, j);
      }

      if (j !== grid[i].length - 1) {
        discoverIsland(i, j + 1);
      }

      return true;
    }

    let counter = 0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (discoverIsland(i, j)) {
          counter++;
        }
      }
    }

    return counter;
  }
}
