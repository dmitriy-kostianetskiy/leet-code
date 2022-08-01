export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let previous: ListNode | null | undefined = null;
  let current: ListNode | null | undefined = head;
  let next: ListNode | null | undefined = current?.next;

  if (!current || !next) {
    return head;
  }

  head = next;

  while (current && next) {
    current.next = next.next;
    next.next = current;

    if (previous) {
      previous.next = next;
    }

    previous = current;
    current = previous.next;
    next = current?.next;
  }

  return head;
}

const root1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
swapPairs(root1);

const root2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
swapPairs(root2);
