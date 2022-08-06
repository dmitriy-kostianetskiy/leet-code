function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const d: boolean[] = [];

  edges.forEach(([, y]) => {
    d[y] = true;
  });

  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!d[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ]),
);

console.log(
  findSmallestSetOfVertices(5, [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ]),
);
