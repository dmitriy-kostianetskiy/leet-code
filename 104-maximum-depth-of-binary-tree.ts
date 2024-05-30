namespace Problem104 {
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

  function maxDepth(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, level: number = 0): number {
      if (!node) {
        return level;
      }

      return Math.max(dfs(node.left, level + 1), dfs(node.right, level + 1));
    }

    return dfs(root);
  }
}
