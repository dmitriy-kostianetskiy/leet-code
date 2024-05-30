namespace Problem637 {
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

  function averageOfLevels(root: TreeNode): number[] {
    const queue: [number, TreeNode][] = [[0, root]];

    const result: number[] = [];

    let sum = 0;
    let count = 0;

    let currentLevel = 0;

    while (queue.length > 0) {
      const [level, node] = queue.shift()!;

      if (level !== currentLevel) {
        result.push(sum / count);

        sum = node.val;
        count = 1;
        currentLevel = level;
      } else {
        sum += node.val;
        count++;
      }

      if (node.left) {
        queue.push([level + 1, node.left]);
      }

      if (node.right) {
        queue.push([level + 1, node.right]);
      }
    }

    result.push(sum / count);

    return result;
  }
}
