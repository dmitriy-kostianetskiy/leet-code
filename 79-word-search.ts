namespace Problem79 {
  function exist(board: string[][], word: string): boolean {
    const visited = board.map((item) => item.map(() => false));

    function dfs(row: number, col: number, index: number): boolean {
      const boardRow = board[row];

      if (boardRow === undefined) {
        return false;
      }

      const boardCell = boardRow[col];

      if (boardCell === undefined) {
        return false;
      }

      if (visited[row][col]) {
        return false;
      }

      if (word[index] !== board[row][col]) {
        return false;
      }

      const newIndex = index + 1;

      if (newIndex === word.length) {
        return true;
      }

      visited[row][col] = true;

      const result =
        dfs(row + 1, col, newIndex) ||
        dfs(row, col + 1, newIndex) ||
        dfs(row - 1, col, newIndex) ||
        dfs(row, col - 1, newIndex);

      visited[row][col] = false;

      return result;
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }

    return false;
  }

  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE',
  );
}
