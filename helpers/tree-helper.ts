export interface TreeNodeLike<T> {
  val: T;
  left: TreeNodeLike<T> | null;
  right: TreeNodeLike<T> | null;
}

export function createTree<T extends TreeNodeLike<K>, K = number>(
  C: { new (val: K): T },
  input: (K | null)[],
): T | null {
  const nodes = new Array<T | null>(input.length + 1);
  nodes.fill(null);

  for (let i = input.length; i >= 1; i--) {
    const val = input[i - 1];
    if (val === null) {
      continue;
    }

    const node = new C(val);
    node.left = nodes[2 * i] || null;
    node.right = nodes[2 * i + 1] || null;
    nodes[i] = node;
  }

  return nodes[1];
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
