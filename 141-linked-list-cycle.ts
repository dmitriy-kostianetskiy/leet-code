namespace Problem141 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function hasCycle(head: ListNode | null): boolean {
    let current = head;
    let next = head?.next?.next;

    while (current !== null && next !== null && current !== next) {
      current = current?.next ?? null;
      next = next?.next?.next ?? null;
    }

    return current === null || next === null ? false : true;
  }
}
