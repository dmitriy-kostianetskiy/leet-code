/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let current = result;
  let b = 0;

  do {
    const a1 = l1?.val ? l1.val : 0;
    const a2 = l2?.val ? l2.val : 0;
    const sum = a1 + a2 + b;

    b = Math.trunc(sum / 10);
    const t = sum % 10;

    current.next = new ListNode(t);
    current = current.next;

    l1 = l1?.next;
    l2 = l2?.next;
  } while (l1 || l2 || b);

  return result.next;
};
