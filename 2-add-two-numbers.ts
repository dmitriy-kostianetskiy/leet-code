namespace Problem2 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let root: ListNode | null = null;
    let current: ListNode | null = null;
    let reminder = 0;

    while (l1 !== null || l2 !== null || reminder > 0) {
      const value1 = l1?.val ?? 0;
      const value2 = l2?.val ?? 0;

      const total = reminder + value1 + value2;
      const value = total % 10;

      reminder = Math.floor(total / 10);

      if (!root) {
        root = new ListNode(value);
        current = root;
      } else {
        current!.next = new ListNode(value);
        current = current!.next;
      }

      l1 = l1?.next || null;
      l2 = l2?.next || null;
    }

    return root;
  }

  addTwoNumbers(new ListNode(2, new ListNode(9)), new ListNode(9));
}
