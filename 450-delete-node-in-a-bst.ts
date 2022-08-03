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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) {
    return null;
  }

  const findNext = (node: TreeNode): TreeNode => {
    if (!node.right) {
      return node;
    }

    return findNext(node.right);
  };

  const findAndReplace = (node: TreeNode | null, key: number): TreeNode | null => {
    if (!node) {
      return null;
    }

    if (key > node.val) {
      node.right = findAndReplace(node.right, key);
    } else if (key < node.val) {
      node.left = findAndReplace(node.left, key);
    } else {
      if (node.left && node.right) {
        const next = findNext(node.left);
        node.val = next.val;

        node.left = findAndReplace(node.left, next.val);
      } else {
        return node.right || node.left;
      }
    }

    return node;
  };

  return findAndReplace(root, key);
}

print(deleteNode(createTree<TreeNode>(TreeNode, [5, 3, 6, 2, 4, null, 7]), 3));
print(deleteNode(createTree<TreeNode>(TreeNode, [5, 3, 6, 2, 4, null, 7]), 7));
print(deleteNode(createTree<TreeNode>(TreeNode, [5, 3, 6, 2, 4, null, 7]), 5));
print(deleteNode(createTree<TreeNode>(TreeNode, [5, 3, 6, 2, 4, null, 7]), 6));
