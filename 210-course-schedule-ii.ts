namespace Problem210 {
  function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph = new Map<number, number[]>();

    // build graph
    prerequisites.forEach(([u, v]) => {
      if (!graph.has(v)) {
        graph.set(v, []);
      }

      graph.get(v)!.push(u);
    });

    // dfs
    const GREY = 1;
    const BLACK = 2;

    const colours = new Map<number, number>();
    const order: number[] = [];

    function dfs(v: number) {
      const currentColor = colours.get(v);

      if (currentColor === BLACK) {
        return true;
      }

      if (currentColor === GREY) {
        return false;
      }

      colours.set(v, GREY);

      const edges = graph.get(v) ?? [];

      for (const u of edges) {
        if (!dfs(u)) {
          return false;
        }
      }

      colours.set(v, BLACK);
      order.push(v);

      return true;
    }

    for (let v = 0; v < numCourses; v++) {
      if (!dfs(v)) {
        return [];
      }
    }

    order.reverse();

    return order;
  }

  findOrder(3, [
    [0, 1],
    [1, 2],
  ]);
}
