import { createTree, findNode, print } from './helpers/tree-helper';

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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): (number | null)[] {
  const values: (number | null)[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) {
      values.push(null);
      return;
    }

    values.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  return values;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: (number | null)[]): TreeNode | null {
  let index = 0;

  const traverse = () => {
    if (index >= data.length) {
      return null;
    }

    const val = data[index++];

    if (val === null) {
      return null;
    }

    const root = new TreeNode(val);

    root.left = traverse();
    root.right = traverse();

    return root;
  };

  return traverse();
}

// const t1 = new Array<number>(1e4);
// for (let i = 0; i < t1.length; i++) {
//   t1[i] = i + 1;
// }

// const tree1 = createTree(TreeNode, t1);
// const a = serialize(tree1);

const tree = createTree(TreeNode, [
  4,
  -7,
  -3,
  null,
  null,
  -9,
  -3,
  9,
  -7,
  -4,
  null,
  6,
  null,
  -6,
  -6,
  null,
  null,
  0,
  6,
  5,
  null,
  9,
  null,
  null,
  -1,
  -4,
  null,
  null,
  null,
  -2,
]);

const l = serialize(tree);

const t = deserialize(l);
print(t);
