namespace Problem19 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const root = head;

    let index = 1;
    let beforeToRemove: ListNode | null = null;
    let toRemove: ListNode | null = null;

    while (head) {
      if (index === n) {
        toRemove = root;
      } else if (index > n) {
        beforeToRemove = toRemove;
        toRemove = toRemove?.next ?? null;
      }

      head = head.next;
      index++;
    }

    if (beforeToRemove === null) {
      return toRemove?.next ?? null;
    } else {
      beforeToRemove.next = toRemove?.next ?? null;

      return root;
    }
  }

  removeNthFromEnd(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    2,
  );
}
