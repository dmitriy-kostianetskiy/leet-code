import { createTree, print } from './helpers/tree-helper';

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const queue: TreeNode[] = [];
  queue.push(root);

  const result: number[][] = [];

  let leftToRight = true;

  while (queue.length > 0) {
    const length = queue.length;
    const resultItem: number[] = [];

    for (let i = 0; i < length; i++) {
      const top = queue.shift()!;

      if (leftToRight) {
        resultItem.push(top.val);
      } else {
        resultItem.unshift(top.val);
      }

      if (top.left) {
        queue.push(top.left);
      }

      if (top.right) {
        queue.push(top.right);
      }
    }

    result.push(resultItem);
    leftToRight = !leftToRight;
  }

  return result;
}

console.log(zigzagLevelOrder(createTree<TreeNode>(TreeNode, [3, 9, 20, null, null, 15, 7])));
