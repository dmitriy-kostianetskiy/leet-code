namespace Problem61 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function length(head: ListNode | null): [number, ListNode | null] {
    if (!head) {
      return [0, null];
    }

    let len = 1;

    while (head.next) {
      len++;
      head = head.next;
    }

    return [len, head];
  }

  function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let [len, tail] = length(head);

    if (len === 0) {
      return head;
    }

    k = k % len;

    if (k === 0) {
      return head;
    }

    let cur: ListNode | null = head;
    let prev: ListNode | null = null;

    k = len - k;

    while (k > 0) {
      prev = cur;
      cur = cur?.next ?? null;
      k--;
    }

    prev!.next = null;
    tail!.next = head;

    return cur;
  }
}
