namespace Problem54_1 {
  function spiralOrder(matrix: number[][]): number[] {
    const n = matrix.length;
    const m = matrix[0].length;

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;

    const result: number[] = [];

    while (result.length < n * m) {
      for (let k = left; k <= right; k++) {
        result.push(matrix[top][k]);
      }

      for (let k = top + 1; k <= bottom; k++) {
        result.push(matrix[k][right]);
      }

      if (bottom !== top) {
        for (let k = right - 1; k >= left; k--) {
          result.push(matrix[bottom][k]);
        }
      }

      if (left !== right) {
        for (let k = bottom - 1; k >= top + 1; k--) {
          result.push(matrix[k][left]);
        }
      }

      left++;
      right--;
      top++;
      bottom--;
    }

    return result;
  }

  // spiralOrder([
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9],
  // ]);

  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]);

  // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]...
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]);

  spiralOrder([[2], [1]]);

  spiralOrder([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
  ]);
}
