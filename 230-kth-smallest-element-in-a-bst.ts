import { createTree } from './helpers/tree-helper';

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function kthSmallest(root: TreeNode | null, k: number): number {
//   if (!root) {
//     return -1;
//   }

//   const traverse = (node: TreeNode | null): number[] => {
//     if (!node) {
//       return [];
//     }

//     return [...traverse(node.left), node.val, ...traverse(node.right)];
//   };

//   const items = traverse(root);

//   return items[k - 1];
// }

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];

  while (true) {
    while (root) {
      stack.push(root);

      root = root.left;
    }

    const top = stack.pop();

    if (!top) {
      return -1;
    }

    root = top;

    if (--k === 0) {
      return root.val;
    }

    root = root.right;
  }
}

console.log(kthSmallest(createTree<TreeNode>(TreeNode, [5, 3, 6, 2, 4, null, 7]), 3));
