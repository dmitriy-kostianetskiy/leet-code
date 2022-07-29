export type Comparer<T> = (item1: T, item2: T) => number;

export class PriorityQueue<T> {
  private heap: T[] = [];
  private heapSize = 0;

  get size(): number {
    return this.heapSize;
  }

  constructor(private readonly comparer?: Comparer<T>) {
    if (!this.comparer) {
      this.comparer = (node1: T, node2: T): number => {
        if (node1 > node2) {
          return 1;
        } else if (node1 < node2) {
          return -1;
        } else {
          return 0;
        }
      };
    }
  }

  enqueue(item: T): void {
    this.heap[this.heapSize++] = item;

    let index = this.heapSize - 1;
    let parentIndex = this.parent(index);

    while (index !== 0 && this.compare(parentIndex, index) === 1) {
      this.swap(index, parentIndex);

      index = parentIndex;
      parentIndex = this.parent(index);
    }
  }

  dequeue(): T | null {
    if (this.heapSize === 0) {
      return null;
    }

    const [top] = this.heap;

    if (this.heapSize === 1) {
      this.heapSize--;

      return top;
    }

    this.heap[0] = this.heap[--this.heapSize];

    let largest = 0;
    let index = 0;

    while (true) {
      const left = this.left(index);
      if (left < this.heapSize && this.compare(largest, left) === 1) {
        largest = left;
      }

      const right = this.right(index);
      if (right < this.heapSize && this.compare(largest, right) === 1) {
        largest = right;
      }

      if (largest !== index) {
        this.swap(largest, index);
        index = largest;
      } else {
        break;
      }
    }

    return top;
  }

  private compare(index1: number, index2: number): number {
    const item1 = this.heap[index1];
    const item2 = this.heap[index2];

    if (this.comparer) {
      return this.comparer(item1, item2);
    } else {
      return this.defaultComparer(item1, item2);
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number): number {
    return 2 * index + 1;
  }

  private right(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    const tmp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmp;
  }

  private defaultComparer(node1: T, node2: T): number {
    if (node1 > node2) {
      return 1;
    } else if (node1 < node2) {
      return -1;
    } else {
      return 0;
    }
  }
}
