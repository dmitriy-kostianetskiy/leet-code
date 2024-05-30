namespace Problem106 {
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

  function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const n = postorder.length;
    const inorderMap = new Map(inorder.map((value, index) => [value, index]));

    let postorderIndex = n - 1;

    function build(l = 0, r = n - 1) {
      if (l > r) {
        return null;
      }

      const rootValue = postorder[postorderIndex];
      const inorderIndex = inorderMap.get(rootValue)!;

      postorderIndex--;

      const root = new TreeNode(rootValue);
      root.right = build(inorderIndex + 1, r);
      root.left = build(l, inorderIndex - 1);

      return root;
    }

    return build();
  }

  const example1 = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
}
