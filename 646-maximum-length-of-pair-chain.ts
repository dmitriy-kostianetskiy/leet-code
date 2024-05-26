function findLongestChain(pairs: number[][]): number {
  pairs.sort(([l1, r1], [l2, r2]) => {
    const lDiff = l1 - l2;
    const rDiff = r1 - r2;

    if (rDiff === 0) {
      return lDiff;
    } else {
      return rDiff;
    }
  });

  let count = 0;
  let end = -1e9;

  for (let i = 0; i < pairs.length; i++) {
    const [l, r] = pairs[i];
    if (l > end) {
      end = r;
      count++;
    }
  }

  return count;
}
