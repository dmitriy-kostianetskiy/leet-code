var reverseList = function (head) {
  let tail = null;

  while (head) {
    const next = head.next;
    head.next = tail;
    tail = head;
    head = next;
  }

  return tail;
};
