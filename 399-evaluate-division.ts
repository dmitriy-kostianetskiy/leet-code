namespace EvaluateDivision {
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

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const graph: Record<string, Record<string, number>> = {};

  for (let i = 0; i < values.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];

    graph[a] = graph[a] ?? {};
    graph[b] = graph[b] ?? {};

    graph[a][b] = value;
    graph[b][a] = 1 / value;
  }

  const allResults: Record<string, Record<string, number>> = {};

  return queries.map(([root, target]) => {
    if (!graph[root] || !graph[target]) {
      return -1;
    }

    if (root === target) {
      return 1;
    }

    if (!allResults[root]) {
      const result: Record<string, number> = {};

      const queue = new EvaluateDivision.PriorityQueue<[string, number]>(
        ([, v1], [, v2]) => v1 - v2,
      );
      queue.enqueue([root, 1]);
      result[root] = 1;

      while (queue.size !== 0) {
        const [p] = queue.dequeue()!;

        if (!graph[p]) {
          continue;
        }

        Object.entries(graph[p]).forEach(([vertex, value]) => {
          if (!(vertex in result) || result[p] * value < result[vertex]) {
            result[vertex] = result[p] * value;
            queue.enqueue([vertex, result[vertex]]);
          }
        });
      }

      allResults[root] = result;
    }

    const answ = allResults[root][target];

    return typeof answ === 'undefined' ? -1 : answ;
  });
}

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
    ],
    [2, 3],
    [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x'],
    ],
  ),
);

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
      ['bc', 'cd'],
    ],
    [1.5, 2.5, 5.0],
    [
      ['a', 'c'],
      ['c', 'b'],
      ['bc', 'cd'],
      ['cd', 'bc'],
    ],
  ),
);

console.log(
  calcEquation(
    [['a', 'b']],
    [0.5],
    [
      ['a', 'b'],
      ['b', 'a'],
      ['a', 'c'],
      ['x', 'y'],
    ],
  ),
);

// a / b = 2
// b / c = 3

// c / a = 3b / 2b =

// c / d = 5

// a / c = 6
// b / 5d = 3
// b / d = 15
// b = 15 d

// a / 15d = 2
// a / d = 30
