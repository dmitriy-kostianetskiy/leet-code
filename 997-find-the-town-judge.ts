function findJudge(n: number, trust: number[][]): number {
  const degree: number[] = [];

  trust.forEach(([x, y]) => {
    degree[y] = (degree[y] || 0) + 1;
    degree[x] = (degree[x] || 0) - 1;
  });

  for (let i = 1; i <= n; i++) {
    const degreeVal = degree[i] || 0;

    if (degreeVal === n - 1) {
      return i;
    }
  }

  return -1;
}

console.log(findJudge(2, [[1, 2]]));

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ]),
);

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [1, 2],
    [3, 2],
  ]),
);
