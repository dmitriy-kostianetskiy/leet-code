namespace Problem199 {
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

  function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];

    const traverse = (node: TreeNode | null, depth: number) => {
      if (!node) {
        return;
      }

      if (result.length === depth) {
        result.push(node.val);
      }

      traverse(node.right, depth + 1);
      traverse(node.left, depth + 1);
    };

    traverse(root, 0);

    return result;
  }

  rightSideView(
    new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5))),
  );
}
