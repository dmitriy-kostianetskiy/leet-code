function searchMatrix(matrix: number[][], target: number): boolean {
  let i = 0;
  let j = matrix[0].length - 1;

  while (j >= 0 && i <= matrix.length - 1) {
    if (target < matrix[i][j]) {
      j--;
    } else if (target > matrix[i][j]) {
      i++;
    } else {
      return true;
    }
  }

  return false;
}

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

console.log(searchMatrix(matrix, 15), true);
console.log(searchMatrix(matrix, 11), true);
console.log(searchMatrix(matrix, 19), true);
console.log(searchMatrix(matrix, 26), true);
console.log(searchMatrix(matrix, 90), true);
console.log(searchMatrix(matrix, 3), false);

const matrix2 = [
  [1, 4],
  [2, 5],
];

console.log(searchMatrix(matrix2, 5), true);
console.log(searchMatrix(matrix2, 11), false);
console.log(searchMatrix(matrix2, 19), false);

const matrix3 = [[1]];

console.log(searchMatrix(matrix3, 5), false);
console.log(searchMatrix(matrix3, 11), false);
console.log(searchMatrix(matrix3, 19), false);

const matrix4 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
];
console.log(searchMatrix(matrix4, 16), true);
console.log(searchMatrix(matrix4, 11), true);
console.log(searchMatrix(matrix4, 19), true);
console.log(searchMatrix(matrix4, 22), true);
console.log(searchMatrix(matrix4, 4), true);
console.log(searchMatrix(matrix4, 1), true);
console.log(searchMatrix(matrix4, 15), true);
