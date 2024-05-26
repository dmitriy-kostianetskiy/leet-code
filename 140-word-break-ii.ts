namespace Problem140 {
  function wordBreak(s: string, wordDict: string[]): string[] {
    const n = s.length;

    const p: string[][] = Array.from(Array(n + 1), () => []);

    for (let i = 1; i <= s.length; i++) {
      for (const word of wordDict) {
        const startIndex = i - word.length;
        const endIndex = i;

        if (startIndex < 0) {
          continue;
        }

        const w = s.slice(startIndex, endIndex);

        if (w === word && (p[startIndex].length > 0 || startIndex === 0)) {
          p[i].push(word);
        }
      }
    }

    const result: string[][] = [];

    const currentWords: string[] = [];

    function getResult(index = n) {
      if (index === 0) {
        result.push([...currentWords].reverse());

        return;
      }

      for (const w of p[index]) {
        currentWords.push(w);
        getResult(index - w.length);
        currentWords.pop();
      }
    }

    getResult();

    return result.map((item) => item.join(' '));
  }

  console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));
}
