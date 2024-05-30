import { escape } from 'querystring';

namespace Problem222 {
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

  function countNodes(root: TreeNode | null): number {
    function leftHeight(root: TreeNode) {
      let result = 1;

      while (root.left) {
        result++;
        root = root.left;
      }

      return result;
    }

    function rightHeight(root: TreeNode) {
      let result = 1;

      while (root.right) {
        result++;
        root = root.right;
      }

      return result;
    }

    if (!root) {
      return 0;
    }

    const hLeft = leftHeight(root);
    const hRight = rightHeight(root);

    if (hLeft === hRight) {
      return Math.pow(2, hLeft) - 1;
    } else {
      return 1 + countNodes(root.left) + countNodes(root.right);
    }
  }
}
