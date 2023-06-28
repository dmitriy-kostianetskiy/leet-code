namespace NetworkDelay {
  type Comparer<T> = (item1: T, item2: T) => number;

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
}

function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph: number[][] = new Array(n + 1);

  graph.fill([]).forEach((_, i) => {
    graph[i] = new Array(n + 1);
    graph[i].fill(-1);
  });

  times.forEach(([u, v, w]) => {
    graph[u][v] = w;
  });

  const queue = new NetworkDelay.PriorityQueue<[number, number]>(([, a], [, b]) => a - b);
  queue.enqueue([k, 0]);

  const dist: number[] = new Array(n + 1);
  dist.fill(Infinity);
  dist[k] = 0;

  while (queue.size > 0) {
    const [u] = queue.dequeue()!;

    graph[u].forEach((w, v) => {
      if (v === 0 || w < 0) {
        return;
      }

      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        queue.enqueue([v, dist[v]]);
      }
    });
  }

  if (dist.includes(Infinity, 1)) {
    return -1;
  }

  return Math.max(...dist.slice(1));
}

console.log(
  networkDelayTime(
    [
      [3, 5, 78],
      [2, 1, 1],
      [1, 3, 0],
      [4, 3, 59],
      [5, 3, 85],
      [5, 2, 22],
      [2, 4, 23],
      [1, 4, 43],
      [4, 5, 75],
      [5, 1, 15],
      [1, 5, 91],
      [4, 1, 16],
      [3, 2, 98],
      [3, 4, 22],
      [5, 4, 31],
      [1, 2, 0],
      [2, 5, 4],
      [4, 2, 51],
      [3, 1, 36],
      [2, 3, 59],
    ],
    5,
    5,
  ),
);
