namespace Problem114 {
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  function flatten(root: TreeNode | null): void {
    let prev: TreeNode | null = null;

    const doFlatten = (node: TreeNode | null) => {
      if (!node) {
        return;
      }

      doFlatten(node.right);
      doFlatten(node.left);

      node.right = prev;
      node.left = null;

      prev = node;
    };

    doFlatten(root);
  }

  flatten(new TreeNode(0, new TreeNode(1)));
}
