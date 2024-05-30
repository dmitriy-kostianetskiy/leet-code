namespace Problem909 {
  type Coordinates = [number, number];

  function snakesAndLadders(board: number[][]): number {
    const n = board.length;

    function getCellIndexes(x: number): Coordinates {
      const row = n - 1 - Math.floor((x - 1) / n);

      const col = n % 2 === (row + 1) % 2 ? (x - 1) % n : n - 1 - ((x - 1) % n);

      return [row, col];
    }

    function getPossibleTurns(x: number): number[] {
      const turns: number[] = [];

      for (let i = x + 1; i <= Math.min(x + 6, n * n); i++) {
        const [row, col] = getCellIndexes(i);

        turns.push(board[row][col] === -1 ? i : board[row][col]);
      }

      return turns;
    }

    const visited: number[][] = board.map((item) => item.map(() => -1));

    const start = 1;

    const [startRow, startCol] = getCellIndexes(start);
    visited[startRow][startCol] = 0;

    const queue: number[] = [start];

    while (queue.length > 0) {
      const currentCell = queue.shift()!;
      const [currentCellRow, currentCellCol] = getCellIndexes(currentCell);

      const turns = getPossibleTurns(currentCell);

      turns.forEach((turn) => {
        const [row, col] = getCellIndexes(turn);

        if (visited[row][col] === -1) {
          queue.push(turn);

          visited[row][col] = visited[currentCellRow][currentCellCol] + 1;
        }

        visited[row][col] = Math.min(
          visited[row][col],
          visited[currentCellRow][currentCellCol] + 1,
        );
      });
    }

    const [endRow, endCol] = getCellIndexes(n * n);
    return visited[endRow][endCol];
  }

  // snakesAndLadders([
  //   [-1, -1, -1, -1, -1, -1],
  //   [-1, -1, -1, -1, -1, -1],
  //   [-1, -1, -1, -1, -1, -1],
  //   [-1, 35, -1, -1, 13, -1],
  //   [-1, -1, -1, -1, -1, -1],
  //   [-1, 15, -1, -1, -1, -1],
  // ]);

  console.log(
    snakesAndLadders([
      [-1, 4, -1],
      [6, 2, 6],
      [-1, 3, -1],
    ]),
  );
}
