namespace Problem82 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
      return head;
    }

    let curr: ListNode | null = head;
    let prev: ListNode | null = null;

    while (curr) {
      const val = curr.val;

      if (curr.next && curr.next.val === val) {
        let p: ListNode | null = curr.next;

        while (p && val === p.val) {
          p = p.next;
        }

        if (prev === null) {
          head = p;
        } else {
          prev.next = p;
        }

        curr = p;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }

    return head;
  }
}
