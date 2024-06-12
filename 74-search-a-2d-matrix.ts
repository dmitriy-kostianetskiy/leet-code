namespace Problem74 {
  function searchMatrix(matrix: number[][], target: number): boolean {
    function searchCol(index: number): number {
      const row = matrix[index];

      const min = row[0];
      const max = row[row.length - 1];

      if (target === min) {
        return 0;
      }

      if (target === max) {
        return row.length - 1;
      }

      let l = 0;
      let r = row.length - 1;

      while (r >= l) {
        const m = Math.floor(l + (r - l) / 2);
        const c = row[m];

        if (target > c) {
          l = m + 1;
        } else if (target < c) {
          r = m - 1;
        } else {
          return m;
        }
      }

      return -1;
    }

    function searchRow(): number {
      let l = 0;
      let r = matrix.length - 1;

      while (r >= l) {
        const m = Math.floor(l + (r - l) / 2);

        const curRow = matrix[m];

        const curRowMin = curRow[0];
        const curRowMax = curRow[curRow.length - 1];

        if (target >= curRowMin && target <= curRowMax) {
          return m;
        }

        if (target > curRowMax) {
          l = m + 1;
        } else if (target < curRowMin) {
          r = m - 1;
        }
      }

      return -1;
    }

    const row = searchRow();

    if (row === -1) {
      return false;
    }

    return searchCol(row) !== -1;
  }
}
