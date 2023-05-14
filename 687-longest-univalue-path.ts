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

function longestUnivaluePath(root: TreeNode | null): number {
  let pathLength = 0;

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    const leftIsGood = node.left?.val === node.val;
    const rightIsGood = node.right?.val === node.val;

    const leftCount = leftIsGood ? left + 1 : 0;
    const rightCount = rightIsGood ? right + 1 : 0;
    const pathCount = leftIsGood && rightIsGood ? leftCount + rightCount : 0;

    pathLength = Math.max(pathLength, leftCount, rightCount, pathCount);

    return Math.max(leftCount, rightCount);
  };

  dfs(root);

  return pathLength;
}
