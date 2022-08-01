class MyLinkedListNode {
  constructor(
    public val: number,
    public next?: MyLinkedListNode,
    public prev?: MyLinkedListNode
  ) {}
}

class MyLinkedList {
  private head?: MyLinkedListNode;
  private tail?: MyLinkedListNode;

  constructor() {}

  get(index: number): number {
    const item = this.findNth(index);

    return item ? item.val : -1;
  }

  addAtHead(val: number): void {
    if (!this.head) {
      this.createHead(val);
      return;
    }

    const newItem = new MyLinkedListNode(val, this.head);
    this.head.prev = newItem;

    this.head = newItem;
  }

  addAtTail(val: number): void {
    if (!this.tail) {
      this.createHead(val);
      return;
    }

    const newItem = new MyLinkedListNode(val, undefined, this.tail);
    this.tail.next = newItem;
    this.tail = newItem;
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    const before = this.findNth(index - 1);

    if (!before) {
      return;
    }

    if (!before?.next) {
      this.addAtTail(val);
      return;
    }

    const next = before.next;

    before.next = new MyLinkedListNode(val, next, before);
    next.prev = before.next;
  }

  deleteAtHead(): void {
    if (!this.head) {
      return;
    }

    const next = this.head.next;

    if (!next) {
      this.head = this.tail = undefined;
      return;
    }

    next.prev = undefined;
    this.head = next;
  }

  deleteAtTail(): void {
    if (!this.tail) {
      return;
    }

    const prev = this.tail.prev;

    if (!prev) {
      this.head = this.tail = undefined;
      return;
    }

    prev.next = undefined;
    this.tail = prev;
  }

  deleteAtIndex(index: number): void {
    if (!this.tail || !this.head) {
      return;
    }

    if (index === 0) {
      return this.deleteAtHead();
    }

    const beforeDelete = this.findNth(index - 1);
    const toDelete = beforeDelete?.next;

    // no element to delete
    if (!toDelete) {
      return;
    }

    // delete tail
    if (!toDelete.next) {
      return this.deleteAtTail();
    }

    const afterDelete = toDelete.next;
    beforeDelete.next = afterDelete;
    afterDelete.prev = beforeDelete;
  }

  private findNth(index: number): MyLinkedListNode | undefined {
    let head = this.head;

    while (head && index-- > 0) {
      head = head.next;
    }

    return head;
  }

  private createHead(val: number): void {
    const newItem = new MyLinkedListNode(val);

    this.head = this.tail = newItem;
  }
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
myLinkedList.get(1); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
myLinkedList.get(1); // return 3

console.log(1);
