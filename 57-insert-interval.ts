namespace Problem57 {
  type Interval = [number, number];

  function insert(intervals: Interval[], newInterval: Interval): Interval[] {
    function mergeIntervals(interval1: Interval, interval2: Interval): Interval {
      return [Math.min(interval1[0], interval2[0]), Math.max(interval1[1], interval2[1])];
    }

    function isOverlap(interval1: Interval, interval2: Interval): boolean {
      if (compareIntervals(interval1, interval2) < 0) {
        return interval1[1] >= interval2[0];
      } else {
        return interval2[1] >= interval1[0];
      }
    }

    function compareIntervals([l1, r1]: Interval, [l2, r2]: Interval): number {
      if (l1 < l2) {
        return -1;
      } else if (l1 > l2) {
        return 1;
      } else {
        return r1 - r2;
      }
    }

    const result = [newInterval];

    for (let i = 0; i < intervals.length; i++) {
      const interval1 = intervals[i];
      const interval2 = result[result.length - 1];

      if (isOverlap(interval1, interval2)) {
        result[result.length - 1] = mergeIntervals(interval1, interval2);
        continue;
      }

      if (compareIntervals(interval2, interval1) < 0) {
        result.push(interval1);
      } else {
        result.push(interval2);
        result[result.length - 2] = interval1;
      }
    }

    return result;
  }

  // console.log(
  //   insert(
  //     [
  //       [1, 3],
  //       [6, 9],
  //     ],
  //     [2, 5],
  //   ),
  // );

  console.log(
    insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
    ),
  );
}
