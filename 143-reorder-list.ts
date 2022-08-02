export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return;
  }

  const middle = findMiddle(head);
  const reversed = reverse(middle);

  let currentHead: ListNode | null = head;
  let currentReversed: ListNode | null = reversed;

  while (currentHead && currentReversed && currentHead !== currentReversed) {
    const nextHead = currentHead?.next;
    const nextReversed = currentReversed?.next;

    currentHead.next = currentReversed;
    if (currentReversed != nextHead) {
      currentReversed.next = nextHead;
    }

    currentReversed = nextReversed;
    currentHead = nextHead;
  }
}

function reverse(head: ListNode): ListNode {
  let current: ListNode | undefined | null = head;
  let tail: ListNode | undefined | null = null;

  while (current) {
    const next = current.next;
    current.next = tail;
    tail = current;
    current = next;
  }

  return tail!;
}

function findMiddle(head: ListNode) {
  let current: ListNode | undefined | null = head;
  let middle: ListNode = head;

  while (current && current.next && middle.next) {
    middle = middle.next;
    current = current.next.next;
  }

  return middle;
}

const root1 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);
reorderList(root1);

const root2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
reorderList(root2);
