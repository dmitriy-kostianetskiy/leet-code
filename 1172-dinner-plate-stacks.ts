class DinnerPlates {
  private stacks: number[][] = [];

  constructor(private readonly capacity: number) {}

  push(val: number): void {
    const index = this.findLeftmostIndex();

    this.stacks[index].push(val);
  }

  pop(): number {
    const index = this.findRightmostIndex();
    if (index === -1) {
      return -1;
    }

    return this.popAtStack(index);
  }

  popAtStack(index: number): number {
    const val = this.stacks[index].pop();

    if (typeof val === 'undefined') {
      return -1;
    }

    return val;
  }

  private findLeftmostIndex(): number {
    const index = this.stacks.findIndex((x) => x.length < this.capacity);

    if (index !== -1) {
      return index;
    }

    return this.stacks.push([]) - 1;
  }

  private findRightmostIndex(): number {
    for (let i = this.stacks.length - 1; i >= 0; i--) {
      if (this.stacks[i].length > 0) {
        return i;
      }
    }

    return -1;
  }
}

// 2
// 1
// 0 1 2 3 4 ...
const obj = new DinnerPlates(2);
obj.push(1);
obj.push(2);
obj.push(3);

const shouldBe3 = obj.pop();
const shouldBeMinus1 = obj.popAtStack(1);

/*



*/

// obj.push(2);
// obj.push(3);
// obj.push(4);
// var param_2 = obj.pop();
// var param_3 = obj.popAtStack(0);
