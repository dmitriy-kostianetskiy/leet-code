class Heap {
  constructor(capacity) {
    this.heap = new Array(capacity);
    this.heapSize = 0;
  }

  insert(val) {
    this.heap[this.heapSize++] = val;

    let i = this.heapSize - 1;
    while (i !== 0 && this.heap[i] > this.heap[this.parent(i)]) {
      this.swap(this.parent(i), i);
      i = this.parent(i);
    }
  }

  dequeue() {
    if (this.heapSize === 0) {
      throw Error();
    }

    if (this.heapSize === 1) {
      this.heapSize--;

      return this.heap[0];
    }

    const res = this.heap[0];

    let i = 0;
    let largest = 0;
    this.heap[i] = this.heap[--this.heapSize];

    while (true) {
      const left = this.left(i);
      if (left < this.heapSize && this.heap[largest] < this.heap[left]) {
        largest = left;
      }

      const right = this.right(i);
      if (right < this.heapSize && this.heap[largest] < this.heap[right]) {
        largest = right;
      }

      if (largest !== i) {
        this.swap(largest, i);
        i = largest;
      } else {
        break;
      }
    }

    return res;
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  swap(a, b) {
    const t = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = t;
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new Heap(stones.length);
  stones.forEach((x) => heap.insert(x));

  while (heap.heapSize > 1) {
    const stone1 = heap.dequeue();
    const stone2 = heap.dequeue();

    if (stone1 !== stone2) {
      const newStone = stone1 - stone2;

      heap.insert(newStone);
    }
  }

  if (heap.heapSize === 0) {
    return 0;
  }
  return heap.dequeue();
};

console.assert(lastStoneWeight([2, 7, 4, 1, 8, 1]) === 1);
console.assert(lastStoneWeight([2]) === 2);
console.assert(lastStoneWeight([1, 2, 2]) === 1);
console.assert(lastStoneWeight([2, 2]) === 0);
