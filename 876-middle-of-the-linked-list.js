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
var middleNode = function (head) {
  let middle = head;
  let count = 0;

  while (head) {
    if (++count % 2 === 0) {
      middle = middle.next;
    }

    head = head.next;
  }

  return middle;
};
