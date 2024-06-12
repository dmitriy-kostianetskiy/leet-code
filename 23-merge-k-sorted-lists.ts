import { MinPriorityQueue } from '@datastructures-js/priority-queue';

namespace Problem23 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const queue = new MinPriorityQueue<ListNode>({ priority: (item) => item.val });

    let root: ListNode | null = null;
    let current: ListNode | null = null;

    for (const list of lists) {
      if (list) {
        queue.enqueue(list);
      }
    }

    while (!queue.isEmpty()) {
      const { element: node } = queue.dequeue();

      if (!node) {
        break;
      }

      if (!root) {
        root = current = node;
      } else {
        current!.next = node;
        current = current!.next;
      }

      if (node.next) {
        queue.enqueue(node.next);
      }
    }

    return root;
  }

  mergeKLists([
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(6, new ListNode(6))),
    new ListNode(1, new ListNode(2, new ListNode(3))),
  ]);
}
