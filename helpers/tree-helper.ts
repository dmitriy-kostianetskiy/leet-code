export interface TreeNodeLike<T> {
  val: T;
  left: TreeNodeLike<T> | null;
  right: TreeNodeLike<T> | null;
}

export function createTree<T extends TreeNodeLike<K>, K = number>(
  C: { new (val: K): T },
  input: (K | null)[],
): T | null {
  let index = 0;

  const traverse = () => {
    if (index >= input.length) {
      return null;
    }

    const val = input[index++];

    if (val === null) {
      return null;
    }

    const root = new C(val);

    root.left = traverse();
    root.right = traverse();

    return root;
  };

  return traverse();
}

export function getValuesFromTree<K = number>(root: TreeNodeLike<K> | null): (K | null)[] {
  const values: (K | null)[] = [];

  const traverse = (node: TreeNodeLike<K> | null, index: number) => {
    if (!node) {
      return;
    }

    values[index - 1] = node.val;

    traverse(node.left, index * 2);
    traverse(node.right, index * 2 + 1);
  };

  traverse(root, 1);

  for (let i = 0; i < values.length; i++) {
    if (values[i] === undefined) {
      values[i] = null;
    }
  }

  return values;
}

export function print<K = number>(root: TreeNodeLike<K> | null): void {
  const values = getValuesFromTree(root);

  console.log(values);
}

export function findNode<K = number>(root: TreeNodeLike<K> | null, val: K): TreeNodeLike<K> | null {
  const traverse = (node: TreeNodeLike<K> | null) => {
    if (!node) {
      return null;
    }

    if (node.val === val) {
      return node;
    }

    return traverse(node.left) || traverse(node.right);
  };

  return traverse(root);
}
