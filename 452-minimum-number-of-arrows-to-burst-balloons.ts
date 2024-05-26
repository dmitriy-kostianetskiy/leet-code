namespace Problem452 {
  type Interval = [number, number];

  function findMinArrowShots(points: Interval[]): number {
    function compareIntervals([l1, r1]: Interval, [l2, r2]: Interval): number {
      if (l1 < l2) {
        return -1;
      } else if (l1 > l2) {
        return 1;
      } else {
        return r1 - r2;
      }
    }

    function isOverlap([_l1, r1]: Interval, [l2, _r2]: Interval): boolean {
      return r1 >= l2;
    }

    function intersectIntervals([l1, r1]: Interval, [l2, r2]: Interval): Interval {
      return [Math.max(l1, l2), Math.min(r1, r2)];
    }

    points.sort(compareIntervals);

    let current = points[0];
    let shots = 1;

    for (let i = 1; i < points.length; i++) {
      if (isOverlap(current, points[i])) {
        current = intersectIntervals(points[i], current);
      } else {
        current = points[i];
        shots++;
      }
    }

    return shots;
  }

  console.log(
    findMinArrowShots([
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ]),
  );
}
