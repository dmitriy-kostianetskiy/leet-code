export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 1) {
    return head;
  }

  let beforePartitionStart: ListNode | null = null;
  let partitionStart: ListNode | null = head;
  let current: ListNode | null = head;
  let counter = 1;

  while (current && partitionStart) {
    current = current.next;
    counter++;

    if (counter % k === 0) {
      const [headOfReversed, tailOfReversed] = reverse(partitionStart, k);

      if (beforePartitionStart) {
        beforePartitionStart.next = headOfReversed;
      } else {
        head = headOfReversed;
      }

      beforePartitionStart = tailOfReversed;

      partitionStart = tailOfReversed.next;
      current = tailOfReversed.next;
    }
  }

  return head;
}

function reverse(head: ListNode, k: number): [ListNode, ListNode] {
  let current: ListNode | null = head;
  let next: ListNode | null = current.next;

  while (current && next && k-- > 1) {
    const newNext = next.next;
    next.next = current;
    current = next;
    next = newNext;
  }

  head.next = next;

  return [current, head];
}

const root2 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);
reverseKGroup(root2, 2);
