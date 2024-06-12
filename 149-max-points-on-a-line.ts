namespace Problem149 {
  function maxPoints(points: number[][]): number {
    if (points.length <= 2) {
      return points.length;
    }

    let maxCount = 1;

    const gcd = (a: number, b: number): number => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };

    for (let i = 0; i < points.length; i++) {
      const [x1, y1] = points[i];

      const map = new Map<string, number>();
      let currentMax = 0;

      for (let j = i + 1; j < points.length; j++) {
        const [x2, y2] = points[j];
        let dx = x2 - x1;
        let dy = y2 - y1;

        const g = gcd(dx, dy);

        dx /= g;
        dy /= g;

        const slope = `${dy}/${dx}`;

        const value = (map.get(slope) || 0) + 1;

        map.set(slope, value);

        currentMax = Math.max(currentMax, value);
      }

      maxCount = Math.max(maxCount, currentMax + 1);
    }

    return maxCount;
  }

  console.log(
    maxPoints([
      [1, 0],
      [1, 2],
      [1, 3],
      [1, 1],
      [2, 2],
      [3, 3],
      [-5, -5],
    ]),
  );

  console.log(maxPoints([[0, 0]]));
  console.log(
    maxPoints([
      [0, 0],
      [1, -1],
      [1, 1],
    ]),
  );
}
