namespace Problem230 {
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

  function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = [];

    while (true) {
      while (root) {
        stack.push(root);

        root = root.left;
      }

      const top = stack.pop()!;

      if (k === 1) {
        return top.val;
      }

      k--;

      root = top.right;
    }
  }
}
