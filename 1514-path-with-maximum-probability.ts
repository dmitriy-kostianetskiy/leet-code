namespace HeapPriorityQueue {
  type GetKeyFunction<T> = (item: T) => any;

  export class PriorityQueue<T> {
    private heap: T[] = [];
    private heapSize = 0;

    get size(): number {
      return this.heapSize;
    }

    constructor(private readonly getKeyFunction?: GetKeyFunction<T>) {}

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
      const key1 = this.getKey(this.heap[index1]);
      const key2 = this.getKey(this.heap[index2]);

      if (key1 > key2) {
        return 1;
      } else if (key1 < key2) {
        return -1;
      } else {
        return 0;
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

    private getKey(node: T): any {
      return this.getKeyFunction ? this.getKeyFunction(node) : node;
    }
  }
}

function buildGraph(edges: number[][], succProb: number[]) {
  const graph = {};

  edges.forEach(([a, b], index) => {
    graph[a] = graph[a] ?? [];
    graph[a].push([b, succProb[index]]);

    graph[b] = graph[b] ?? [];
    graph[b].push([a, succProb[index]]);
  });

  return graph;
}

function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number,
): number {
  const graph = buildGraph(edges, succProb);

  const distance = new Array(n);
  distance.fill(0);

  const visited = new Array(n);
  visited.fill(false);

  const queue = new HeapPriorityQueue.PriorityQueue<[number, number]>(
    ([vertex, priority]) => -priority,
  );
  queue.enqueue([start, 1]);

  while (queue.size > 0) {
    const [currentVertex, currentDistance] = queue.dequeue()!;

    if (visited[currentVertex]) {
      continue;
    }

    distance[currentVertex] = currentDistance;
    visited[currentVertex] = true;

    graph[currentVertex]?.forEach(([targetVertex, weight]) => {
      if (visited[targetVertex]) {
        return;
      }

      const pathWeight = distance[currentVertex] * weight;

      if (pathWeight > distance[targetVertex]) {
        distance[targetVertex] = pathWeight;
        queue.enqueue([targetVertex, pathWeight]);
      }
    });
  }

  return distance[end];
}

maxProbability(
  3,
  [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  [0.5, 0.5, 0.2],
  0,
  2,
);
