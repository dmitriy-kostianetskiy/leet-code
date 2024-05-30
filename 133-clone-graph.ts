namespace Problem133 {
  class _Node {
    val: number;
    neighbors: _Node[];

    constructor(val?: number, neighbors?: _Node[]) {
      this.val = val === undefined ? 0 : val;
      this.neighbors = neighbors === undefined ? [] : neighbors;
    }
  }

  function cloneGraph(node: _Node | null): _Node | null {
    if (!node) {
      return null;
    }

    function dfs(node: _Node, action: (node: _Node) => void, visited = new Set<_Node>()) {
      if (visited.has(node)) {
        return;
      }

      action(node);

      visited.add(node);

      node.neighbors.forEach((neighbour) => {
        dfs(neighbour, action, visited);
      });
    }

    const nodeMap = new Map<_Node, _Node>();

    dfs(node, (node) => {
      nodeMap.set(node, new _Node(node.val));
    });

    dfs(node, (node) => {
      const copyNode = nodeMap.get(node)!;

      copyNode.neighbors = node.neighbors.map((neighbour) => nodeMap.get(neighbour)!);
    });

    return nodeMap.get(node)!;
  }
}
