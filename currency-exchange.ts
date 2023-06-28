namespace CurrencyConversion {
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

const graph: Record<string, [string, number][]> = {
  ['USD']: [
    ['EUR', 0.9],
    ['RUB', 90],
  ],
  ['EUR']: [
    ['USD', 0.9],
    ['RSD', 117.5],
  ],
  ['RSD']: [['EUR', 117.5]],
};

function buildGraph(pairs: [string, string, number][]): Record<string, [string, number][]> {
  return pairs.reduce((acc, [currency1, currency2, rate]) => {
    acc[currency1] = acc[currency1] ?? [];
    acc[currency1].push([currency2, rate]);

    acc[currency2] = acc[currency2] ?? [];
    acc[currency2].push([currency1, 1 / rate]);

    return acc;
  }, {});
}

// 117.5 RSD -> 1 EUR -> 1.111 USD -> 99.999 RUB

function convert(
  pairs: [string, string, number][],
  source: string,
  target: string,
  amount: number,
) {
  const graph = buildGraph(pairs);

  const queue = new CurrencyConversion.PriorityQueue<[string, number]>(([, v]) => v);
  queue.enqueue([source, 1]);

  const distance: Record<string, number> = {};

  while (queue.size > 0) {
    const [current, currentDistance] = queue.dequeue()!;
    distance[current] = currentDistance;

    graph[current]?.forEach(([vertex, vertexDistance]) => {
      if (!(vertex in distance)) {
        distance[vertex] = Infinity;
      }

      if (distance[vertex] > distance[current] * vertexDistance) {
        distance[vertex] = distance[current] * vertexDistance;
        queue.enqueue([vertex, distance[vertex]]);
      }
    });
  }

  if (!distance[target]) {
    return null;
  }

  return distance[target] * amount;
}

const pairs: [string, string, number][] = [
  ['USD', 'EUR', 0.9],
  ['USD', 'RUB', 90],
  ['EUR', 'RSD', 117.5],
];

console.log(convert(pairs, 'RSD', 'RUB', 1000));
