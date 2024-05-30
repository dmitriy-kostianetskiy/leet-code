namespace Problem146 {
  type LinkedListNode<T> = {
    value: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
  };

  class LinkedList<T> {
    private head: LinkedListNode<T> | null = null;
    private tail: LinkedListNode<T> | null = null;

    size() {
      let i = 0;
      let cur = this.head;

      while (cur) {
        i++;
        cur = cur.next;
      }

      return i;
    }

    addToTail(value: T): LinkedListNode<T> {
      if (this.head === null || this.tail === null) {
        this.head = this.tail = {
          value,
          next: null,
          prev: null,
        };

        return this.head;
      }

      const newNode: LinkedListNode<T> = {
        value,
        next: null,
        prev: this.tail,
      };

      this.tail!.next = newNode;

      this.tail = this.tail!.next;

      return newNode;
    }

    removeFromHead(): LinkedListNode<T> | null {
      if (this.head) {
        const result = this.head;
        this.remove(this.head);

        return result;
      }

      return null;
    }

    remove(node: LinkedListNode<T>) {
      if (node === this.head && node === this.tail) {
        this.head = this.tail = null;
      } else if (node === this.head) {
        this.head = this.head.next;

        if (this.head) {
          this.head.prev = null;
        }
      } else if (node === this.tail) {
        this.tail = this.tail.prev;

        if (this.tail) {
          this.tail.next = null;
        }
      } else {
        const beforeDelete = node.prev;
        const afterDelete = node.next;

        if (beforeDelete) {
          beforeDelete.next = afterDelete;
        }

        if (afterDelete) {
          afterDelete.prev = beforeDelete;
        }
      }
    }
  }

  class LRUCache {
    private list = new LinkedList<[number, number]>();
    private map = new Map<number, LinkedListNode<[number, number]>>();

    constructor(private capacity: number) {}

    isValid() {
      return this.list.size() === this.map.size;
    }

    get(key: number): number {
      const node = this.map.get(key);

      if (node === undefined) {
        return -1;
      }

      this.list.remove(node);
      this.map.delete(key);

      const newNode = this.list.addToTail(node.value);
      this.map.set(key, newNode);

      return newNode.value[1];
    }

    put(key: number, value: number): void {
      const valueFromMap = this.map.get(key);

      if (valueFromMap !== undefined) {
        this.map.delete(valueFromMap.value[0]);
        this.list.remove(valueFromMap);
      }

      if (this.map.size === this.capacity) {
        const node = this.list.removeFromHead();

        if (node) {
          this.map.delete(node.value[0]);
        }
      }

      const node = this.list.addToTail([key, value]);
      this.map.set(key, node);
    }
  }

  const cache = new LRUCache(10);

  const c = [
    'put',
    'put',
    'put',
    'put',
    'put',
    'get',
    'put',
    'get',
    'get',
    'put',
    'get',
    'put',
    'put',
    'put',
    'get',
    'put',
    'get',
    'get',
    'get',
    'get',
    'put',
    'put',
    'get',
    'get',
    'get',
    'put',
    'put',
    'get',
    'put',
    'get',
    'put',
    'get',
    'get',
    'get',
    'put',
    'put',
    'put',
    'get',
    'put',
    'get',
    'get',
    'put',
    'put',
    'get',
    'put',
    'put',
    'put',
    'put',
    'get',
    'put',
    'put',
    'get',
    'put',
    'put',
    'get',
    'put',
    'put',
    'put',
    'put',
    'put',
    'get',
    'put',
    'put',
    'get',
    'put',
    'get',
    'get',
    'get',
    'put',
    'get',
    'get',
    'put',
    'put',
    'put',
    'put',
    'get',
    'put',
    'put',
    'put',
    'put',
    'get',
    'get',
    'get',
    'put',
    'put',
    'put',
    'get',
    'put',
    'put',
    'put',
    'get',
    'put',
    'put',
    'put',
    'get',
    'get',
    'get',
    'put',
    'put',
    'put',
    'put',
    'get',
    'put',
    'put',
    'put',
    'put',
    'put',
    'put',
    'put',
  ];

  const a = [
    [10, 13],
    [3, 17],
    [6, 11],
    [10, 5],
    [9, 10],
    [13],
    [2, 19],
    [2],
    [3],
    [5, 25],
    [8],
    [9, 22],
    [5, 5],
    [1, 30],
    [11],
    [9, 12],
    [7],
    [5],
    [8],
    [9],
    [4, 30],
    [9, 3],
    [9],
    [10],
    [10],
    [6, 14],
    [3, 1],
    [3],
    [10, 11],
    [8],
    [2, 14],
    [1],
    [5],
    [4],
    [11, 4],
    [12, 24],
    [5, 18],
    [13],
    [7, 23],
    [8],
    [12],
    [3, 27],
    [2, 12],
    [5],
    [2, 9],
    [13, 4],
    [8, 18],
    [1, 7],
    [6],
    [9, 29],
    [8, 21],
    [5],
    [6, 30],
    [1, 12],
    [10],
    [4, 15],
    [7, 22],
    [11, 26],
    [8, 17],
    [9, 29],
    [5],
    [3, 4],
    [11, 30],
    [12],
    [4, 29],
    [3],
    [9],
    [6],
    [3, 4],
    [1],
    [10],
    [3, 29],
    [10, 28],
    [1, 20],
    [11, 13],
    [3],
    [3, 12],
    [3, 8],
    [10, 9],
    [3, 26],
    [8],
    [7],
    [5],
    [13, 17],
    [2, 27],
    [11, 15],
    [12],
    [9, 19],
    [2, 15],
    [3, 16],
    [1],
    [12, 17],
    [9, 1],
    [6, 19],
    [4],
    [5],
    [5],
    [8, 1],
    [11, 7],
    [5, 2],
    [9, 28],
    [1],
    [2, 2],
    [7, 4],
    [4, 22],
    [7, 24],
    [9, 26],
    [13, 28],
    [11, 26],
  ];

  const r = c.map((command, i) => {
    if (cache.isValid()) {
      console.log(i);
    }
    if (command === 'put') {
      cache.put(a[i][0], a[i][1]);
      return null;
    } else {
      const t = cache.get(a[i][0]);

      return t;
    }
  });

  console.log(r);
}

const xyz = [
  null,
  null,
  null,
  null,
  null,
  null,
  -1,
  null,
  19,
  17,
  null,
  -1,
  null,
  null,
  null,
  -1,
  null,
  -1,
  5,
  -1,
  12,
  null,
  null,
  3,
  5,
  5,
  null,
  null,
  1,
  null,
  -1,
  null,
  30,
  5,
  30,
  null,
  null,
  null,
  -1,
  null,
  -1,
  24,
  null,
  null,
  18,
  null,
  null,
  null,
  null,
  -1,
  null,
  null,
  18,
  null,
  null,
  -1,
  null,
  null,
  null,
  null,
  null,
  18,
  null,
  null,
  -1,
  null,
  4,
  29,
  30,
  null,
  12,
  -1,
  null,
  null,
  null,
  null,
  29,
  null,
  null,
  null,
  null,
  17,
  22,
  18,
  null,
  null,
  null,
  -1,
  null,
  null,
  null,
  20,
  null,
  null,
  null,
  -1,
  18,
  18,
  null,
  null,
  null,
  null,
  20,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const xx = [
  null,
  null,
  null,
  null,
  null,
  null,
  -1,
  null,
  19,
  17,
  null,
  -1,
  null,
  null,
  null,
  -1,
  null,
  -1,
  5,
  -1,
  12,
  null,
  null,
  3,
  5,
  5,
  null,
  null,
  1,
  null,
  -1,
  null,
  30,
  5,
  30,
  null,
  null,
  null,
  -1,
  null,
  -1,
  24,
  null,
  null,
  18,
  null,
  null,
  null,
  null,
  14,
  null,
  null,
  -1,
  null,
  null,
  -1,
  null,
  null,
  null,
  null,
  null,
  -1,
  null,
  null,
  24,
  null,
  4,
  29,
  30,
  null,
  -1,
  -1,
  null,
  null,
  null,
  null,
  29,
  null,
  null,
  null,
  null,
  17,
  22,
  -1,
  null,
  null,
  null,
  -1,
  null,
  null,
  null,
  20,
  null,
  null,
  null,
  -1,
  -1,
  -1,
  null,
  null,
  null,
  null,
  -1,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
