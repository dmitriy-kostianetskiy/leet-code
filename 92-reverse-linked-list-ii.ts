namespace Problem92 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const root = head;

    let preStart: ListNode | null = null;
    let start: ListNode | null = null;
    let end: ListNode | null = null;
    let index = 1;

    while (head) {
      if (index === left - 1) {
        preStart = head;
      } else if (index === left) {
        end = head;
        start = head;
      } else if (index > left && index <= right) {
        if (preStart) {
          preStart.next = head;
        }

        const next = head.next;

        head.next = start;
        end!.next = next;
        start = head;
        head = end!;
      }

      head = head.next;
      index++;
    }

    return preStart === null ? start : root;
  }

  // reverseBetween(
  //   new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
  //   2,
  //   4,
  // );

  reverseBetween(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    1,
    4,
  );
}
