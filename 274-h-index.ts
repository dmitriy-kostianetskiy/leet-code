function hIndex(citations: number[]): number {
  const d = Array(1001).fill(0);

  let max = 0;

  for (let i = 0; i < citations.length; i++) {
    d[citations[i]]++;

    max = Math.max(max, citations[i]);
  }

  let s = 0;

  for (let i = max; i >= 0; i--) {
    s += d[i];

    if (s >= i) {
      return i;
    }
  }

  return 0;
}

// console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
