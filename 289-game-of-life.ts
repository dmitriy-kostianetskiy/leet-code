namespace Problem289 {
  function gameOfLife(board: number[][]): void {
    const n = board.length;
    const m = board[0].length;

    function getCell(i: number, j: number): number {
      if (board[i] === undefined) {
        return 0;
      }

      if (board[i][j] === undefined) {
        return 0;
      }

      return board[i][j];
    }

    function getIsAlive(i: number, j: number): boolean {
      const cellValue = getCell(i, j);

      return (cellValue & 1) === 1;
    }

    function setNextState(i: number, j: number, state: number) {
      board[i][j] = board[i][j] | (state << 1);
    }

    function getNextState(i: number, j: number): number {
      return (board[i][j] & 2) >> 1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const isAlive = getIsAlive(i, j);

        const score = [
          getIsAlive(i - 1, j - 1),
          getIsAlive(i - 1, j),
          getIsAlive(i, j - 1),
          getIsAlive(i + 1, j + 1),
          getIsAlive(i, j + 1),
          getIsAlive(i + 1, j),
          getIsAlive(i - 1, j + 1),
          getIsAlive(i + 1, j - 1),
        ].reduce((acc, item) => acc + (item ? 1 : 0), 0);

        if (isAlive) {
          if (score >= 2 && score <= 3) {
            setNextState(i, j, 1);
          }
        } else {
          if (score === 3) {
            setNextState(i, j, 1);
          }
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        board[i][j] = getNextState(i, j);
      }
    }
  }

  const board1 = [
    [1, 1],
    [1, 0],
  ];

  gameOfLife(board1);

  console.log(JSON.stringify(board1));
}
