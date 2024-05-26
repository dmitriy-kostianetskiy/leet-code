namespace Problem73 {
  function setZeroes(matrix: number[][]): void {
    const rows = new Set<number>();
    const cols = new Set<number>();

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          rows.add(i);
          cols.add(j);
        }
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (rows.has(i) || cols.has(j)) {
          matrix[i][j] = 0;
        }
      }
    }
  }
}
