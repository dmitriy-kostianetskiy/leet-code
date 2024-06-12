namespace Problem52 {
  function totalNQueens(n: number): number {
    function validate(queens: [number, number][]) {
      for (let i = 0; i < queens.length; i++) {
        const current = queens[i];
        const [currentRow, currentCol] = current;

        const others = queens.filter((item) => item !== current);

        if (
          others.some(
            ([row, col]) =>
              currentRow === row ||
              currentCol === col ||
              Math.abs(currentCol - col) === Math.abs(currentRow - row),
          )
        ) {
          return false;
        }
      }

      return true;
    }

    const solutions: string[][] = [];

    function solve(row: number, queens: [number, number][]): number {
      if (queens.length === n) {
        return 1;
      }

      let sum = 0;

      for (let i = 0; i < n; i++) {
        const newQueens: [number, number][] = [...queens, [row, i]];

        if (validate(newQueens)) {
          sum += solve(row + 1, newQueens);
        }
      }

      return sum;
    }

    return solve(0, []);
  }

  console.log(JSON.stringify(totalNQueens(1)));
  console.log(JSON.stringify(totalNQueens(2)));
  console.log(JSON.stringify(totalNQueens(3)));
  console.log(JSON.stringify(totalNQueens(4)));
  // console.log(JSON.stringify(totalNQueens(9)));
}
