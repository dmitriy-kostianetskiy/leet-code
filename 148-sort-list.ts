namespace Problem148 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
      return head;
    }

    let fast: ListNode | null | undefined = head;
    let slow: ListNode = head;
    let slowParent: ListNode = head;

    while (slowParent && slow && slow.next && fast && fast.next) {
      slowParent = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    slowParent.next = null;

    const left = sortList(head);
    const right = sortList(slow);

    return merge(left, right);
  }

  function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
    let head = new ListNode(0);
    let current = head;

    while (left || right) {
      if (!left) {
        current.next = right;
        break;
      }

      if (!right) {
        current.next = left;
        break;
      }

      if (left.val <= right.val) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }

      current = current.next;
    }

    return head.next;
  }

  const list = sortList(new ListNode(2, new ListNode(3, new ListNode(1, new ListNode(7)))));
  console.log(list);
}
