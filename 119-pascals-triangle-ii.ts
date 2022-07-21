function getRow(rowIndex: number): number[] {
  const result = new Array<number>(rowIndex + 1);
  result.fill(0);
  result[0] = 1;

  for (let i = 0; i < rowIndex; i++) {
    let previous = result[0];

    for (let j = 1; j < i + 2; j++) {
      const current = result[j] + previous;
      previous = result[j];
      result[j] = current;
    }
  }

  return result;
}

console.log(getRow(5));
console.log(getRow(0));
