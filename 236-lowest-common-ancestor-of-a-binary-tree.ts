import { createTree, findNode } from './helpers/tree-helper';

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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let answer: TreeNode | null = null;

  const find = (node: TreeNode | null): boolean => {
    if (!node) {
      return false;
    }

    const left = find(node.left);
    const right = find(node.right);

    const root = node === p || node === q;

    if (+left + +right + +root >= 2) {
      answer = node;
    }

    return left || right || root;
  };

  find(root);

  return answer;
}

const tree = createTree<TreeNode>(TreeNode, [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p = findNode(tree, 5);
const q = findNode(tree, 1);

lowestCommonAncestor(tree, p, q);
