type Item = [number, number, number];

class MyPriorityQueue {
  private heap: Item[] = [];

  get size(): number {
    return this.heap.length;
  }

  constructor() {}

  enqueue(item: Item): void {
    this.heap.push(item);

    let index = this.heap.length - 1;
    let parentIndex = this.parent(index);

    while (index !== 0 && this.compare(this.heap[parentIndex], this.heap[index]) === 1) {
      this.swap(index, parentIndex);

      index = parentIndex;
      parentIndex = this.parent(index);
    }
  }

  dequeue(): Item | null {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const top = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let index = 0;
    let largest = 0;

    while (true) {
      const left = this.left(index);

      if (left < this.heap.length && this.compare(this.heap[largest], this.heap[left]) === 1) {
        largest = left;
      }

      const right = this.right(index);
      if (right < this.heap.length && this.compare(this.heap[largest], this.heap[right]) === 1) {
        largest = right;
      }

      if (largest !== index) {
        this.swap(index, largest);
        index = largest;
      } else {
        break;
      }
    }

    return top;
  }

  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  private compare([, , d1]: Item, [, , d2]: Item): number {
    if (d1 > d2) {
      return 1;
    }

    if (d1 < d2) {
      return -1;
    }

    return 0;
  }

  private left(index: number) {
    return index * 2 + 1;
  }

  private right(index: number) {
    return index * 2 + 2;
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }
}

function kClosest(points: number[][], k: number): number[][] {
  const queue = new MyPriorityQueue();

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];

    queue.enqueue([x, y, Math.sqrt(x * x + y * y)]);
  }

  const answer: number[][] = [];

  for (let i = 0; i < k; i++) {
    const [x, y] = queue.dequeue()!;
    answer.push([x, y]);
  }

  return answer;
}

kClosest(
  [
    [-2, 10],
    [-4, -8],
    [10, 7],
    [-4, -7],
  ],
  3,
);
