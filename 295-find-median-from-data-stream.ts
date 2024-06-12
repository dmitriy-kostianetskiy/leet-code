import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';

namespace Problem295 {
  class MedianFinder {
    #left = MaxPriorityQueue.from([]);
    #right = MinPriorityQueue.from([]);

    constructor() {}

    addNum(num: number): void {
      if (this.#left.size() === 0 && this.#right.size() === 0) {
        this.#left.enqueue(num, num);
        return;
      }

      if (num <= this.#left.front().element) {
        this.#left.enqueue(num, num);
      } else {
        this.#right.enqueue(num, num);
      }

      if (this.#left.size() - this.#right.size() > 1) {
        const { element } = this.#left.dequeue();

        this.#right.enqueue(element, element);
      }

      if (this.#right.size() - this.#left.size() > 1) {
        const { element } = this.#right.dequeue();

        this.#left.enqueue(element, element);
      }
    }

    findMedian(): number {
      const leftSize = this.#left.size();
      const rightSize = this.#right.size();

      if (leftSize === rightSize) {
        const { element: leftElement } = this.#left.front();
        const { element: rightElement } = this.#right.front();

        return (leftElement + rightElement) / 2;
      }

      if (leftSize > rightSize) {
        const { element: leftElement } = this.#left.front();

        return leftElement;
      }

      const { element: rightElement } = this.#right.front();
      return rightElement;
    }
  }
}
