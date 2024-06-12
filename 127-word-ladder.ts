namespace Problem127 {
  function distance(word1: string, word2: string) {
    let result = 0;

    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        result++;
      }
    }

    return result;
  }

  function buildGraph(wordList: string[]): number[][] {
    const graph: number[][] = wordList.map((_, i) => []);

    for (let i = 0; i < wordList.length; i++) {
      for (let j = i + 1; j < wordList.length; j++) {
        const dist = distance(wordList[i], wordList[j]);

        if (dist === 1) {
          graph[i].push(j);
          graph[j].push(i);
        }
      }
    }

    return graph;
  }

  function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let startIndex = wordList.indexOf(beginWord);

    if (startIndex === -1) {
      wordList.unshift(beginWord);

      startIndex = 0;
    }

    let endIndex = wordList.indexOf(endWord);

    if (endIndex === -1) {
      return 0;
    }

    const graph = buildGraph(wordList);

    const queue: number[] = [startIndex];
    const dist: number[] = wordList.map((_) => -1);
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

    return dist[endIndex] + 1;
  }

  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
}
