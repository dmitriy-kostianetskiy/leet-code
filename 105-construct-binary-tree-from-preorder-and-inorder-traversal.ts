export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let preorderIndex = 0;

  const buildTree = (l: number, r: number): TreeNode | null => {
    if (preorderIndex >= preorder.length) {
      return null;
    }
    const rootValue = preorder[preorderIndex];
    const midIndex = inorder.findIndex((x) => x === rootValue); // could use hashtable instead

    if (midIndex > r || midIndex < l) {
      return null;
    }

    preorderIndex++;
    const root = new TreeNode(rootValue);
    root.left = buildTree(l, midIndex - 1);
    root.right = buildTree(midIndex - 1, r);

    return root;
  };

  return buildTree(0, inorder.length - 1);
}

// buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
// buildTree([-1], [-1]);
buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]);

//    3
//  9   15
