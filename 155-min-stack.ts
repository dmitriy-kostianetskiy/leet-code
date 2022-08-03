class MinStack {
  private readonly stack: [number, number][] = [];

  push(val: number): void {
    const min = this.stack.length > 0 ? Math.min(this.stack[this.stack.length - 1][1], val) : val;
    this.stack.push([val, min]);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
minStack.top(); // return 0
console.log(minStack.getMin()); // return -2
