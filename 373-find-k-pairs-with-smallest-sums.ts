import { MinPriorityQueue } from '@datastructures-js/priority-queue';

namespace Problem373 {
  function kSmallestPairsTL(nums1: number[], nums2: number[], k: number): number[][] {
    const pairs = nums1.flatMap((num1) =>
      nums2.map((num2) => [[num1, num2], num1 + num2] as const),
    );

    const queue = MinPriorityQueue.from(pairs);
    const result: [number, number][] = [];
    for (let i = 0; i < k; i++) {
      const { element } = queue.dequeue();

      result.push(element);
    }

    return result;
  }

  function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const result: [number, number][] = [];

    const visited = new Set<string>();
    const queue = MinPriorityQueue.from([[[0, 0], nums1[0] + nums2[0]] as const]);

    while (k-- > 0 && !queue.isEmpty()) {
      const {
        element: [i, j],
      } = queue.dequeue();

      result.push([nums1[i], nums2[j]]);

      if (i + 1 < nums1.length && !visited.has(`${i + 1},${j}`)) {
        queue.enqueue([i + 1, j], nums1[i + 1] + nums2[j]);

        visited.add(`${i + 1},${j}`);
      }

      if (j + 1 < nums2.length && !visited.has(`${i},${j + 1}`)) {
        queue.enqueue([i, j + 1], nums1[i] + nums2[j + 1]);

        visited.add(`${i},${j + 1}`);
      }
    }

    return result;
  }

  console.log(JSON.stringify(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 20)));
}
