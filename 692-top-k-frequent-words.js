class PriorityQueue {
  constructor() {
    this.heap = [];
    this.heapSize = 0;
  }

  enqueue(key, val) {
    this.heap[this.heapSize++] = { key, val };

    let index = this.heapSize - 1;

    while (index !== 0 && this._compare(this._parent(index), index) === -1) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  dequeue() {
    if (this.heapSize === 0) {
      return undefined;
    }

    if (this.heapSize === 1) {
      this.heapSize--;
      return this.heap[0];
    }

    const result = this.heap[0];
    this.heap[0] = this.heap[--this.heapSize];

    let largest = 0;
    let index = 0;

    while (true) {
      const left = this._left(index);
      if (left < this.heapSize && this._compare(largest, left) === -1) {
        largest = left;
      }

      const right = this._right(index);
      if (right < this.heapSize && this._compare(largest, right) === -1) {
        largest = right;
      }

      if (largest !== index) {
        this._swap(largest, index);
        index = largest;
      } else {
        break;
      }
    }

    return result;
  }

  _compare(index1, index2) {
    const node1 = this.heap[index1];
    const node2 = this.heap[index2];

    if (node1.key > node2.key) {
      return 1;
    } else if (node1.key < node2.key) {
      return -1;
    } else {
      if (node1.val < node2.val) {
        return 1;
      } else if (node1.val > node2.val) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  _parent(index) {
    return Math.floor((index - 1) / 2);
  }

  _left(index) {
    return 2 * index + 1;
  }

  _right(index) {
    return 2 * index + 2;
  }

  _swap(index1, index2) {
    const tmp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmp;
  }
}

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();
  words.forEach((x) => {
    const val = map.has(x) ? map.get(x) : 0;
    map.set(x, val + 1);
  });

  const queue = new PriorityQueue();

  for (let entry of map.entries()) {
    const key = entry[1];
    const value = entry[0];

    queue.enqueue(key, value);
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(queue.dequeue().val);
  }

  return result;
};

console.log(
  topKFrequent(
    ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    4
  )
);
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));
