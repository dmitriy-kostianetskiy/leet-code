namespace Problem54_1 {
  function spiralOrder(matrix: number[][]): number[] {
    const n = matrix.length;
    const m = matrix[0].length;

    if (n === 1 || m === 1) {
      return matrix.flat();
    }

    let i = 0;
    let j = 0;

    let iInc = 0;
    let jInc = 0;

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;
    let count = 0;

    const result: number[] = [];

    while (result.length < n * m) {
      result.push(matrix[i][j]);
      count++;

      if (count === 2 * (bottom - top + 1) + 2 * (right - left - 1)) {
        left++;
        right--;
        top++;
        bottom--;

        j = left;
        i = top;
        count = 0;
        continue;
      }

      if (left === right) {
        iInc = 1;
        jInc = 0;
      } else if (top === bottom) {
        iInc = 0;
        jInc = 1;
      } else if (j === left && i === top) {
        iInc = 0;
        jInc = 1;
      } else if (j === right && i === top) {
        iInc = 1;
        jInc = 0;
      } else if (j === right && i === bottom) {
        iInc = 0;
        jInc = -1;
      } else if (j === left && i === bottom) {
        iInc = -1;
        jInc = 0;
      }

      i += iInc;
      j += jInc;
    }

    return result;
  }

  // spiralOrder([
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9],
  // ]);

  // spiralOrder([
  //   [1, 2, 3, 4],
  //   [5, 6, 7, 8],
  //   [9, 10, 11, 12],
  // ]);

  // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]...
  // spiralOrder([
  //   [1, 2, 3, 4, 5],
  //   [6, 7, 8, 9, 10],
  //   [11, 12, 13, 14, 15],
  //   [16, 17, 18, 19, 20],
  //   [21, 22, 23, 24, 25],
  // ]);

  spiralOrder([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
  ]);
}
