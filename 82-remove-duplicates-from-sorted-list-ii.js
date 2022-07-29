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
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  let curr = head;
  let prev = null;

  while (curr) {
    const val = curr.val;

    if (curr.next && curr.next.val === val) {
      let p = curr.next;

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
};
