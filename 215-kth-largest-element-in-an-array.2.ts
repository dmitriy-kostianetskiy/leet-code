import { MinPriorityQueue } from '@datastructures-js/priority-queue';

namespace Problem215_2 {
  function findKthLargest(nums: number[], k: number): number {
    const queue = new MinPriorityQueue();

    nums.forEach((value) => queue.enqueue(value, -value));

    let result: number = 0;

    for (let i = 0; i < k; i++) {
      const { element } = queue.dequeue();

      result = element as number;
    }

    return result;
  }

  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
}
