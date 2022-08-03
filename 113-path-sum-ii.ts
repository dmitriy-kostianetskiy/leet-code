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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  const current: number[] = [];

  const traverse = (node: TreeNode | null, sum: number) => {
    if (node === null) {
      return;
    }

    current.push(node.val);

    const newSum = sum - node.val;

    if (newSum === 0 && !node.left && !node.right) {
      result.push([...current]);
    } else {
      traverse(node.left, newSum);
      traverse(node.right, newSum);
    }

    current.pop();
  };

  traverse(root, targetSum);

  return result;
}

// pathSum(new TreeNode(1, new TreeNode(2), new TreeNode(1, new TreeNode(1), new TreeNode(5))), 3);
pathSum(new TreeNode(-2, null, new TreeNode(-3)), -2);
