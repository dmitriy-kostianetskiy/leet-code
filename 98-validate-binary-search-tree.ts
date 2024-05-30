namespace Problem98 {
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

  function isValidBST(root: TreeNode): boolean {
    function dfs(root: TreeNode | null, l: number, r: number): boolean {
      if (!root) {
        return true;
      }

      const rootValue = root.val;

      if (rootValue < l || rootValue > r) {
        return false;
      }

      return dfs(root.left, l, rootValue - 1) && dfs(root.right, rootValue + 1, r);
    }

    return dfs(root, -Infinity, Infinity);
  }
}
