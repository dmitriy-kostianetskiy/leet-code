namespace Problem129 {
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

  function sumNumbers(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    function dfs(node: TreeNode, current: number = 0) {
      const newCurrent = current * 10 + node.val;

      if (!node.left && !node.right) {
        return newCurrent;
      }

      return (
        (node.left ? dfs(node.left, newCurrent) : 0) +
        (node.right ? dfs(node.right, newCurrent) : 0)
      );
    }

    return dfs(root);
  }
}
