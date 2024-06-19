namespace Problem341 {
  abstract class NestedInteger {
    //  If value is provided, then it holds a single integer
    //  Otherwise it holds an empty nested list
    constructor(value?: number) {}

    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    abstract isInteger(): boolean;

    //   Return the single integer that this NestedInteger holds, if it holds a single integer
    //  Return null if this NestedInteger holds a nested list
    abstract getInteger(): number | null;

    // Set this NestedInteger to hold a single integer equal to value.
    abstract setInteger(value: number);

    // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    abstract add(elem: NestedInteger);

    //   Return the nested list that this NestedInteger holds,
    //  or an empty list if this NestedInteger holds a single integer
    abstract getList(): NestedInteger[];
  }

  class NestedIterator {
    constructor(private readonly nestedList: NestedInteger[]) {}

    hasNext(): boolean {
      return this.getTop() !== null;
    }

    next(): number {
      const top = this.getTop()!;

      this.nestedList.shift();

      return top;
    }

    private getTop(): number | null {
      while (this.nestedList.length > 0) {
        const [top] = this.nestedList;

        if (top.isInteger()) {
          return top.getInteger();
        }

        this.nestedList.shift();
        this.nestedList.unshift(...top.getList());
      }

      return null;
    }
  }
}
