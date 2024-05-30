namespace Problem101 {
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

  function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
      return true;
    }

    function check(left: TreeNode | null, right: TreeNode | null) {
      if (left === null && right === null) {
        return true;
      }

      if (left === null || right === null) {
        return false;
      }

      if (left.val !== right.val) {
        return false;
      }

      return check(left.left, right.right) && check(left.right, right.left);
    }

    return check(root.left, root.right);
  }

  console.log(
    isSymmetric(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      ),
    ),
  );
}
