function generateMatrix(n: number): number[][] {
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }

  let c = 1;
  for (let layer = 0; layer < Math.floor((n + 1) / 2); layer++) {
    for (let i = layer; i < n - layer; i++) {
      result[layer][i] = c++;
    }

    for (let i = layer + 1; i < n - layer; i++) {
      result[i][n - layer - 1] = c++;
    }

    for (let i = n - layer - 1 - 1; i >= layer; i--) {
      result[n - layer - 1][i] = c++;
    }

    for (let i = n - layer - 1 - 1; i >= layer + 1; i--) {
      result[i][layer] = c++;
    }
  }

  return result;
}

console.log(JSON.stringify(generateMatrix(1), undefined, 2));
console.log(JSON.stringify(generateMatrix(2), undefined, 2));
console.log(JSON.stringify(generateMatrix(3), undefined, 2));
console.log(JSON.stringify(generateMatrix(4), undefined, 2));
console.log(JSON.stringify(generateMatrix(5), undefined, 2));
