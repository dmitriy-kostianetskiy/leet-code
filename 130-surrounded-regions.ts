namespace Problem130 {
  function solve(board: string[][]): void {
    const n = board.length;
    const m = board[0].length;

    function dfs(i: number, j: number) {
      if (board[i][j] !== 'O') {
        return;
      }

      board[i][j] = 'S';

      if (i !== 0) {
        dfs(i - 1, j);
      }

      if (j !== 0) {
        dfs(i, j - 1);
      }

      if (i !== n - 1) {
        dfs(i + 1, j);
      }

      if (j !== m - 1) {
        dfs(i, j + 1);
      }
    }

    for (let i = 0; i < n; i++) {
      dfs(i, 0);
      dfs(i, m - 1);
    }

    for (let i = 0; i < m; i++) {
      dfs(0, i);
      dfs(n - 1, i);
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 'O') {
          board[i][j] = 'X';
        } else if (board[i][j] === 'S') {
          board[i][j] = 'O';
        }
      }
    }
  }

  const board = [
    ['X', 'O', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
  ];

  // [
  //   ['X', 'O', 'X', 'O', 'X', 'O'],
  //   ['O', 'X', 'X', 'X', 'X', 'X'],
  //   ['X', 'X', 'X', 'X', 'X', 'O'],
  //   ['O', 'X', 'O', 'X', 'O', 'X'],
  // ];

  solve(board);
}
