/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let nth = null;
  let preNth = null;

  let pointer = head;
  let i = 0;

  while (pointer) {
    i++;

    if (i === n) {
      nth = head;
    }

    if (i > n) {
      preNth = nth;
      nth = nth.next;
    }

    pointer = pointer.next;
  }

  if (!preNth) {
    return nth.next;
  }

  preNth.next = nth.next;

  return head;
};
