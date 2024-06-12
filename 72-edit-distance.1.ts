namespace Problem72_1 {
  function minDistance(word1: string, word2: string): number {
    const cache: number[][] = Array.from(Array(word1.length + 1), () =>
      Array(word2.length + 1).fill(-1),
    );

    function solve(index1 = word1.length - 1, index2 = word2.length - 1): number {
      if (index1 < 0) {
        return index2 + 1;
      }

      if (index2 < 0) {
        return index1 + 1;
      }

      const char1 = word1[index1];
      const char2 = word2[index2];

      if (cache[index1][index2] !== -1) {
        return cache[index1][index2];
      }

      if (char1 === char2) {
        return (cache[index1][index2] = solve(index1 - 1, index2 - 1));
      }

      const insert = solve(index1, index2 - 1) + 1;
      const remove = solve(index1 - 1, index2) + 1;
      const replace = solve(index1 - 1, index2 - 1) + 1;

      return (cache[index1][index2] = Math.min(insert, remove, replace));
    }

    return solve();
  }

  console.log(minDistance('ab', 'ab'));
  console.log(minDistance('ab', 'a'));
  console.log(minDistance('ab', 'b'));
  console.log(minDistance('a', 'abc'));
  console.log(minDistance('ab', ''));
  console.log(minDistance('ab', 'cd'));
  console.log(minDistance('horse', 'ros'));
  console.log(minDistance('intention', 'execution'));
}
