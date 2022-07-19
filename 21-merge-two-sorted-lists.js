var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (!list1 && !list2) {
    return null;
  }

  let r = null;
  let head = null;

  while (list1 && list2) {
    let node = null;

    if (list1.val > list2.val) {
      node = list2;
      list2 = list2.next;
    } else {
      node = list1;
      list1 = list1.next;
    }

    if (!r) {
      head = node;
      r = node;
    } else {
      r.next = node;
      r = r.next;
    }
  }

  if (list1) {
    r.next = list1;
  }

  if (list2) {
    r.next = list2;
  }

  return head;
};
