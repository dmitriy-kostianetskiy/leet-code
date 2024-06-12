namespace Problem51 {
  function solveNQueens(n: number): string[][] {
    function createBoard(board: boolean[][], row: number, col: number) {
      function setCell(row: number, col: number) {
        if (row < 0 || col < 0 || row >= n || col >= n) {
          return;
        }

        newBoard[row][col] = true;
      }
      const newBoard = board.map((row) => row.map((item) => item));

      for (let i = 0; i < n; i++) {
        setCell(row, i);
        setCell(i, col);

        setCell(row - i, col - i);
        setCell(row + i, col + i);
        setCell(row - i, col + i);
        setCell(row + i, col - i);
      }

      return newBoard;
    }

    function findPositions(
      board: boolean[][],
      [startRow, startCol]: [number, number],
    ): [number, number][] {
      const positions: [number, number][] = [];

      for (let i = startRow; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i === startRow && j < startCol) {
            continue;
          }

          if (!board[i][j]) {
            positions.push([i, j]);
          }
        }
      }

      return positions;
    }

    function createSolutionBoard(queens: [number, number][]): string[] {
      const solution: string[] = [];

      for (let i = 0; i < n; i++) {
        let row = '';

        for (let j = 0; j < n; j++) {
          const isQueen = queens.findIndex(([qi, qj]) => i === qi && j === qj) !== -1;

          row += isQueen ? 'Q' : '.';
        }

        solution.push(row);
      }

      return solution;
    }

    const solutions: string[][] = [];

    function solve(board: boolean[][], queens: [number, number][]): void {
      if (queens.length === n) {
        solutions.push(createSolutionBoard(queens));
        return;
      }

      const positions = findPositions(board, queens[queens.length - 1]);

      if (!positions.length) {
        return;
      }

      for (const position of positions) {
        const [row, col] = position;

        const newBoard = createBoard(board, row, col);

        solve(newBoard, [...queens, position]);
      }
    }

    const board = Array.from(Array(n), () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        solve(createBoard(board, i, j), [[i, j]]);
      }
    }

    return solutions;
  }

  // console.log(JSON.stringify(solveNQueens(1)));
  // console.log(JSON.stringify(solveNQueens(2)));
  // console.log(JSON.stringify(solveNQueens(3)));
  // console.log(JSON.stringify(solveNQueens(4)));
  console.log(JSON.stringify(solveNQueens(9)));
}
