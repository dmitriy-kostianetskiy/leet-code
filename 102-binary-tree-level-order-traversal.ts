namespace Problem102 {
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
      return [];
    }

    const levels: number[][] = [];
    const queue: [number, TreeNode][] = [[0, root]];

    let currentLevel = -1;

    while (queue.length > 0) {
      const [level, node] = queue.shift()!;

      if (currentLevel !== level) {
        currentLevel = level;

        levels[currentLevel] = levels[currentLevel] ?? [];
      }

      levels[currentLevel].push(node.val);

      if (node.left) {
        queue.push([level + 1, node.left]);
      }

      if (node.right) {
        queue.push([level + 1, node.right]);
      }
    }

    return levels;
  }
}
