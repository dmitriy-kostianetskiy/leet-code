import { createTree } from './helpers/tree-helper';

namespace Problem173 {
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  class BSTIterator {
    private readonly stack: TreeNode[] = [];

    constructor(private root: TreeNode | null) {}

    next(): number {
      this.fillStack();

      const item = this.stack.pop()!;

      this.root = item.right;

      return item.val;
    }

    hasNext(): boolean {
      this.fillStack();

      return this.stack.length > 0;
    }

    private fillStack(): void {
      while (this.root) {
        this.stack.push(this.root);
        this.root = this.root.left;
      }
    }
  }

  const bSTIterator = new BSTIterator(
    createTree<TreeNode>(TreeNode, [7, 3, 15, null, null, 9, 20]),
  );
  console.log(bSTIterator.next()); // return 3
  console.log(bSTIterator.next()); // return 7
  console.log(bSTIterator.hasNext()); // return True
  console.log(bSTIterator.next()); // return 9
  console.log(bSTIterator.hasNext()); // return True
  console.log(bSTIterator.next()); // return 15
  console.log(bSTIterator.hasNext()); // return True
  console.log(bSTIterator.next()); // return 20
  console.log(bSTIterator.hasNext()); // return False
}
