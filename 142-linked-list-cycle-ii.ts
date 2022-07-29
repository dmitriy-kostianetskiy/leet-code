export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  // turtle hare
  while (slow?.next && fast?.next?.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        fast = fast && fast.next;
        slow = slow && slow.next;
      }

      return slow;
    }
  }

  return null;
}
