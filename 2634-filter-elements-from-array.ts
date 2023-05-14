function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const result: number[] = [];

  for (const [i, v] of arr.entries()) {
    if (fn(v, i)) {
      result.push(v);
    }
  }

  return result;
}
