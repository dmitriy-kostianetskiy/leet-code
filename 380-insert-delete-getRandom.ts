class RandomizedSet {
  private list = new Array<number>();
  private map = new Map<number, number>();

  constructor() {}

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }

    const index = this.list.push(val) - 1;
    this.map.set(val, index);

    return true;
  }

  remove(val: number): boolean {
    const currentIndex = this.map.get(val);

    if (currentIndex === undefined) {
      return false;
    }

    const lastValue = this.list.pop()!;

    if (lastValue !== val) {
      this.list[currentIndex] = lastValue;
      this.map.set(lastValue, currentIndex);
    }

    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}
