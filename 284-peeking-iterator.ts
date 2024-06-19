namespace Problem284 {
  interface Iterator {
    hasNext(): boolean;
    next(): number;
  }

  class PeekingIterator {
    private top: number | null = null;

    constructor(private readonly iterator: Iterator) {}

    peek(): number {
      if (this.top) {
        return this.top;
      }

      this.top = this.iterator.next();

      return this.top;
    }

    next(): number {
      const top = this.top;

      if (top) {
        this.top = null;
        return top;
      }

      return this.iterator.next();
    }

    hasNext(): boolean {
      if (this.top) {
        return true;
      }

      return this.iterator.hasNext();
    }
  }
}
