/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  let d = 0;

  const dfs = (node?: TreeNode | null) => {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    d = Math.max(left + right, d);

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return d;
}
