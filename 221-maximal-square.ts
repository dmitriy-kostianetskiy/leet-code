namespace Problem221 {
  function maximalSquare(matrix: (string | number)[][]): number {
    let maxSide = 0;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const left = i === 0 ? 0 : Number(matrix[i - 1][j]);
        const top = j === 0 ? 0 : Number(matrix[i][j - 1]);
        const topLeft = i === 0 || j === 0 ? 0 : Number(matrix[i - 1][j - 1]);

        const min = Math.min(left, top, topLeft);

        matrix[i][j] = Number(matrix[i][j]) === 0 ? 0 : min + 1;

        maxSide = Math.max(maxSide, Number(matrix[i][j]));
      }
    }

    return maxSide * maxSide;
  }

  console.log(
    maximalSquare([
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '0'],
      ['1', '0', '0', '0'],
    ]),
  );

  [
    [1, 1, 1, 1],
    [0, 1, 2, 2],
    [1, 1, 2, 0],
  ];
}
