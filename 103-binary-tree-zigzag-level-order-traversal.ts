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

  let queue: TreeNode[] = [];
  queue.push(root);

  const result: number[][] = [];

  let leftToRight = true;

  while (queue.length > 0) {
    const items = queue.slice().map((x) => x.val);

    if (!leftToRight) {
      items.reverse();
    }

    result.push(items);

    queue = queue.flatMap((x) => {
      const res = [];
      if (x.left) {
        res.push(x.left);
      }

      if (x.right) {
        res.push(x.right);
      }

      return res;
    });

    leftToRight = !leftToRight;
  }

  return result;
}

console.log(zigzagLevelOrder(createTree<TreeNode>(TreeNode, [3, 9, 20, null, null, 15, 7])));
