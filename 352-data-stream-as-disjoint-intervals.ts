namespace Problem352 {
  class SummaryRanges {
    private parent = new Map<number, [number, number]>();

    constructor() {}

    addNum(value: number): void {
      const [leftX, leftY] = this.parent.get(value - 1) ?? [value, value];
      const [centerX, centerY] = this.parent.get(value) ?? [value, value];
      const [rightX, rightY] = this.parent.get(value + 1) ?? [value, value];

      const interval: [number, number] = [
        Math.min(leftX, rightX, centerX),
        Math.max(leftY, rightY, centerY),
      ];

      for (let i = interval[0]; i <= interval[1]; i++) {
        this.parent.set(i, interval);
      }
    }

    getIntervals(): number[][] {
      const all = Array.from(this.parent.values());

      const used = new Set<string>();

      return all
        .filter((interval) => {
          const key = `${interval[0]}, ${interval[1]}`;

          if (used.has(key)) {
            return false;
          }

          used.add(key);

          return true;
        })
        .sort(([s1], [s2]) => s1 - s2);
    }
  }

  const obj = new SummaryRanges();

  obj.addNum(1);
  obj.addNum(1);
  console.log(JSON.stringify(obj.getIntervals(), null, 2));

  obj.addNum(3);
  obj.addNum(5);
  obj.addNum(4);
  obj.addNum(2);

  console.log(JSON.stringify(obj.getIntervals(), null, 2));
}
