function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) {
    return 0;
  }
  intervals.sort((interval1, interval2) => interval1[1] - interval2[1]);

  let end = intervals[0][1];
  let counter = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      counter++;
    }
  }

  return intervals.length - counter;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 7],
    [2, 4],
    [1, 3],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
