namespace Problem86 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function partition(head: ListNode | null, x: number): ListNode | null {
    let leftListHead: ListNode | null = null;
    let leftListTail: ListNode | null = null;
    let rightListHead: ListNode | null = null;
    let rightListTail: ListNode | null = null;

    while (head) {
      if (head.val >= x) {
        if (!rightListHead || !rightListTail) {
          rightListHead = rightListTail = new ListNode(head.val);
        } else {
          rightListTail.next = new ListNode(head.val);
          rightListTail = rightListTail.next;
        }
      } else {
        if (!leftListHead || !leftListTail) {
          leftListHead = leftListTail = new ListNode(head.val);
        } else {
          leftListTail.next = new ListNode(head.val);
          leftListTail = leftListTail.next;
        }
      }

      head = head.next;
    }

    if (!leftListHead || !leftListTail) {
      return rightListHead;
    }

    if (!rightListHead) {
      return leftListHead;
    }

    leftListTail.next = rightListHead;

    return leftListHead;
  }
}
