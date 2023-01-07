class ListNode1 {
  val: number;
  next: ListNode1 | null;
  constructor(val?: number, next?: ListNode1 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode1 | null): boolean {
  if (!head) {
    return true;
  }

  let p1: ListNode1 | null | undefined = head;
  let p2: ListNode1 | null | undefined = head;
  let prev: ListNode1 | null | undefined = null;

  while (p1 && p2) {
    const next1 = p1.next;
    const next2 = p2.next?.next;

    if (!p2.next) {
      p1 = next1;
      break;
    }

    p1.next = prev;
    prev = p1;

    p1 = next1;
    p2 = next2;
  }

  while (p1 && prev) {
    if (p1.val !== prev.val) {
      return false;
    }

    p1 = p1?.next;
    prev = prev?.next;
  }

  return true;
}

isPalindrome(new ListNode1(1, new ListNode1(2)));
