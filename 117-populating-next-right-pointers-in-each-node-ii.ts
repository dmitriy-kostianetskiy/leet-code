namespace Problem117 {
  class _Node {
    val: number;
    left: _Node | null;
    right: _Node | null;
    next: _Node | null;

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
      this.next = next === undefined ? null : next;
    }
  }

  function connect(root: _Node | null): _Node | null {
    if (!root) {
      return null;
    }

    const queue: [number, _Node][] = [];
    queue.push([0, root]);

    let previous: [number, _Node | null] = [-1, null];

    while (queue.length > 0) {
      const [previousLevel, previousNode] = previous;

      previous = queue.shift()!;

      const [level, node] = previous;

      if (node === null) {
        continue;
      }

      if (level === previousLevel) {
        node.next = previousNode;
      }

      if (node.right) {
        queue.push([level + 1, node.right]);
      }

      if (node.left) {
        queue.push([level + 1, node.left]);
      }
    }

    return root;
  }

  connect(
    new _Node(1, new _Node(2, new _Node(4), new _Node(5)), new _Node(3, undefined, new _Node(7))),
  );
}
