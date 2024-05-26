namespace Problem48 {
  function rotate(matrix: number[][]): void {
    const n = matrix.length;

    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
      for (let j = 0; j < Math.floor(n / 2); j++) {
        const tmp = matrix[n - j - 1][i];
        matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
        matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
        matrix[j][n - i - 1] = matrix[i][j];
        matrix[i][j] = tmp;
      }
    }
  }

  const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  rotate(matrix1);

  const matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ];

  rotate(matrix2);

  const matrix3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  rotate(matrix3);
}
