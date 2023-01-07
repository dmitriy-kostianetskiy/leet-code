var listlen = (head) => {
  if (!head) {
    return 0;
  }

  let len = 1;

  while (head.next) {
    len++;
    head = head.next;
  }

  return [len, prev];
};

var rotateRight = function (head, k) {
  let [len, tail] = listlen(head);

  if (len === 0) {
    return head;
  }

  k = k % len;

  if (k === 0) {
    return head;
  }

  let cur = head;
  let prev = null;

  k = len - k;

  while (k > 0) {
    prev = cur;
    cur = cur.next;
    k--;
  }

  prev.next = null;
  tail.next = head;

  return cur;
};
