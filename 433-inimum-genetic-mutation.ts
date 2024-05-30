namespace Problem433 {
  function distance(gene1: string, gene2: string) {
    let result = 0;

    for (let i = 0; i < gene1.length; i++) {
      if (gene1[i] !== gene2[i]) {
        result++;
      }
    }

    return result;
  }

  function buildGraph(bank: string[]): number[][] {
    const graph: number[][] = bank.map((_, i) => []);

    for (let i = 0; i < bank.length; i++) {
      for (let j = i + 1; j < bank.length; j++) {
        const dist = distance(bank[i], bank[j]);

        if (dist === 1) {
          graph[i].push(j);
          graph[j].push(i);
        }
      }
    }

    return graph;
  }

  function minMutation(startGene: string, endGene: string, bank: string[]): number {
    let startIndex = bank.indexOf(startGene);

    if (startIndex === -1) {
      bank.unshift(startGene);

      startIndex = 0;
    }

    let endIndex = bank.indexOf(endGene);

    if (endIndex === -1) {
      return -1;
    }

    const graph = buildGraph(bank);

    const queue: number[] = [startIndex];
    const dist: number[] = bank.map((_) => -1);
    dist[startIndex] = 0;

    while (queue.length > 0) {
      const v = queue.shift()!;

      for (let u of graph[v]) {
        if (dist[u] === -1) {
          dist[u] = dist[v] + 1;
          queue.push(u);
        }
      }
    }

    return dist[endIndex];
  }
}
