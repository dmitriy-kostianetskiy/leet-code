namespace Problem6 {
  function convert(s: string, numRows: number): string {
    if (numRows === 1) {
      return s;
    }

    const n = s.length;
    const cols = Math.ceil(n / numRows); // number of columns

    const result: string[] = [];

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < cols; j++) {
        const columnIndex = i + (2 * numRows - 2) * j; // index in the column
        result.push(s[columnIndex]);

        if (i !== 0 && i !== numRows - 1) {
          const diagonalIndex = columnIndex + (numRows - i - 1) * 2; // index on the diagonal

          if (diagonalIndex < n) {
            result.push(s[diagonalIndex]);
          }
        }
      }
    }

    return result.join('');
  }

  function print(s: string, numRows: number, answer: string) {
    const actual = convert(s, numRows);

    console.log(actual);
    console.assert(actual === answer);
  }

  // print('PAYPALISHIRING', 3, 'PAHNAPLSIIGYIR');
  // print('PAYPALISHIRING', 4, 'PINALSIGYAHRPI');
  // print('PAYPALISHIRING', 5, 'PHASIYIRPLIGAN');
  // print('A', 1, 'A');
  // print('A', 2, 'A');
  print('AB', 1, 'AB');
  // print('ABC', 2, 'ACB');
}

// 012345678 9  10 11 12 13, numRows = 3
// PAYPALISH I  R  I  N  G

// x[i] = i * (2n - 2)
// P   A   H   N // 0 (0, 4, 8, 12)
// A P L S I I G // 1 (1, 3, 5, 7, 9, 11, 13)
// Y   I   R     // 2 (2, 6, 10)

// x(i) = i * (2n - 2)
// x(0) = 0;
// x(1) = 4
// x(2) = 8

// 012345678 9  10 11 12 13, numRows = 4
// PAYPALISH I  R  I  N  G

// P     I    N // (0, 6, 12)
// A   L S  I G // (1, 5, 7, 11, 13) x[1] = [x[i+1], x[i + 1 + 4], x[i + 1 + 6], x[i + 6 + 4], x[i + 6 + 4 + 6]] = []
// Y A   H R    // (2, 4, 8, 10) x[2] = [x[2 + 2], x[2 + 2 + 4]
// P     I      // (3, 9)

// (0, 6, 12), (1, 5, 7, 11, 13), (2, 4, 8, 10), (3, 9)

// n

// x[0] = 0
// x[1] = x[0] + n + (n - 2) = 0 + 4 + 4 - 2 = 6
// x[2] = x[1] + n + (n - 2) = 6 + 4 + 4 - 2 = 12

// 0123456789 10 11 12 13
// PAYPALISHI  R  I  N  G, numRows = 5

// (2n - 2) = 8

// P     H     // (0, 8) // x[0] = x[0], x[0 + 8], + 2 * n -2
// A   S I     // (1, 7, 9) // x[1] = x[1], x[1 + 6], x[1 + 6 + 2] , + 2 * n - 2 * 2, 2 *
// Y  I  R     // (2, 6, 10) // x[2] = x[2], x[2 + 4], x[2 + 4 + 4]
// P L   I G   // (3, 5, 11, 13) // x[3] = x[3], x[3 + 2], x[3 + 2 + 6], x[3 + 2 + 6 + 2]
// A     N     // (4, 12) // x[4] = x[4], x[4 + 8]

// x[0] = 0
// x[1] = x[0] + n + (n - 2) = 0 + 5 + 5 - 2 = 8

// 0123456789 10 11 12 13
// PAYPALISHI  R  I  N  G, numRows = 6

// x(i) = i * (2n - 2)

//0 P      R (0, 10)
//1 A    I I (1, 9, 11) //
//2 Y   H  N
//3 P  S   G
//4 A I
//5 L

// A C
// B
