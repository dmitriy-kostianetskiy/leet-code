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

function maxPathSum(root: TreeNode | null): number {
  let totalMax = -1e20;

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }

    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);

    totalMax = Math.max(totalMax, node.val + left + right);

    return node.val + Math.max(left, right);
  };

  dfs(root);

  return totalMax;
}
