namespace Problem530 {
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

  function getMinimumDifference(root: TreeNode): number {
    let minDiff = Infinity;

    function dfs(root: TreeNode | null) {
      if (root === null) {
        return [Infinity, -Infinity];
      }

      const [min1, max1] = dfs(root.left);
      const [min2, max2] = dfs(root.right);

      minDiff = Math.min(
        minDiff,
        Math.abs(root.val - min1),
        Math.abs(root.val - min2),
        Math.abs(root.val - max1),
        Math.abs(root.val - max2),
      );

      return [Math.min(root.val, min1, min2), Math.max(root.val, max1, max2)];
    }

    dfs(root);

    return minDiff;
  }

  console.log(
    getMinimumDifference(
      new TreeNode(11, new TreeNode(5, new TreeNode(2), new TreeNode(10)), new TreeNode(20)),
    ),
  );
}
