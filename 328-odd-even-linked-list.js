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
var oddEvenList = function (head) {
  if (!head) {
    return head;
  }

  let leftHead = null,
    leftTail = null,
    rightHead = null,
    rightTail = null;
  let counter = 1;

  while (head) {
    next = head.next;
    head.next = null;

    if (counter % 2 === 0) {
      if (!rightHead) {
        rightHead = rightTail = head;
      } else {
        rightTail.next = head;
        rightTail = rightTail.next;
      }
    } else {
      if (!leftHead) {
        leftHead = leftTail = head;
      } else {
        leftTail.next = head;
        leftTail = leftTail.next;
      }
    }

    head = next;
    counter++;
  }

  if (leftTail) {
    leftTail.next = rightHead;
  }

  return leftHead || rightHead;
};
