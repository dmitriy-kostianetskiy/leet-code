namespace Problem21 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null || list2 === null) {
      return list1 ?? list2;
    }

    let root: ListNode | null = null;
    let current: ListNode | null = null;

    while (list1 !== null || list2 !== null) {
      const value1 = list1?.val ?? Infinity;
      const value2 = list2?.val ?? Infinity;

      const [selected, newList1, newList2] =
        value1 < value2 ? [list1, list1?.next || null, list2] : [list2, list1, list2?.next || null];

      if (!root) {
        root = selected;
        current = selected;
      } else {
        current!.next = selected;
        current = selected;
      }

      list1 = newList1;
      list2 = newList2;
    }

    return root;
  }

  mergeTwoLists(
    new ListNode(0, new ListNode(1)),
    new ListNode(-1, new ListNode(5, new ListNode(6))),
  );
}
