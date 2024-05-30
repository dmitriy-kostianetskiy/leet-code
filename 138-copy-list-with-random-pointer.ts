import { Node } from './1823-find-the-winner-of-the-circular-game';

namespace Problem138 {
  class _Node {
    val: number;
    next: _Node | null;
    random: _Node | null;

    constructor(val?: number, next?: _Node, random?: _Node) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
      this.random = random === undefined ? null : random;
    }
  }

  function pass(head: _Node | null, action: (node: _Node) => void) {
    while (head) {
      action(head);

      head = head?.next;
    }
  }

  function copyRandomList(head: _Node | null): _Node | null {
    let root: _Node | undefined;
    let current: _Node | undefined;

    const sourceToCopyMap = new Map<_Node, _Node>();

    pass(head, (node) => {
      const copy = new _Node(node.val);

      // link to source list, will be replaced with a link to copy below
      copy.random = node.random;

      sourceToCopyMap.set(node, copy);

      if (!current) {
        root = copy;
        current = copy;
      } else {
        current.next = copy;
        current = copy;
      }
    });

    if (!root) {
      return null;
    }

    pass(root, (node) => {
      node.random = sourceToCopyMap.get(node.random!)!;
    });

    return root;
  }
}
