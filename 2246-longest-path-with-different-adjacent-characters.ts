function longestPath(parent: number[], s: string): number {
  type TreeNode = {
    value: string;
    children: TreeNode[];
  };

  const nodes: TreeNode[] = Array.from(s).map((x) => ({
    value: x,
    children: [],
  }));

  parent.forEach((x, i) => {
    if (x === -1) {
      return;
    }

    const child = nodes[i];
    const parent = nodes[x];

    parent.children.push(child);
  });

  let result = 1;

  const dfs = (node: TreeNode) => {
    const values = node.children.reduce<number[]>((acc, child) => {
      const pathLength = dfs(child);

      if (child.value === node.value) {
        result = Math.max(result, pathLength);
      } else {
        result = Math.max(result, pathLength + 1);
        acc.push(pathLength);
      }

      return acc;
    }, []);

    if (!values.length) {
      return 1;
    }

    if (values.length === 1) {
      return values[0] + 1;
    }

    const [max1, max2] = values.sort((a, b) => b - a);
    result = Math.max(result, max1 + max2 + 1);

    return max1 + 1;
  };

  dfs(nodes[0]);

  return result;
}
