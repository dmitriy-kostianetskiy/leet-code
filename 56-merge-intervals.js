/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const n = intervals.length;

  intervals.sort((interval1, interval2) => {
    if (interval1[0] < interval2[0]) {
      return -1;
    } else if (interval1[0] > interval2[0]) {
      return 1;
    } else {
      return interval1[1] - interval2[1];
    }
  });

  const mergeIntervals = (interval1, interval2) => {
    return [
      Math.min(interval1[0], interval2[0]),
      Math.max(interval1[1], interval2[1]),
    ];
  };

  const isOverlap = (interval1, interval2) => {
    return interval1[1] >= interval2[0];
  };

  const res = [intervals[0]];

  for (let i = 1; i < n; i++) {
    const interval1 = res[res.length - 1];
    const interval2 = intervals[i];

    if (isOverlap(interval1, interval2)) {
      res[res.length - 1] = mergeIntervals(interval1, interval2);
    } else {
      res.push(interval2);
    }
  }

  return res;
};

//tests
// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
// console.log(
//   merge([
//     [1, 4],
//     [4, 5],
//   ])
// );

// console.log(
//   merge([
//     [2, 4],
//     [1, 5],
//     [0, 19],
//     [19, 21],
//   ])
// );

console.log(
  merge([
    [0, 0],
    [1, 2],
    [5, 5],
    [2, 4],
    [3, 3],
    [5, 6],
    [5, 6],
    [4, 6],
    [0, 0],
    [1, 2],
    [0, 2],
    [4, 5],
  ])
);
