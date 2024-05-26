namespace Problem68 {
  function pad(n: number) {
    return Array(n).fill(' ').join('');
  }

  function buildLine(words: string[], maxWidth: number) {
    const occupiedByWords = words.reduce((acc, word) => acc + word.length, 0);
    const freeSpace = maxWidth - occupiedByWords;

    const numberOfWordBreaks = words.length - 1;

    if (numberOfWordBreaks === 0) {
      return words[0] + pad(freeSpace);
    } else {
      const minSpacing = Math.floor(freeSpace / numberOfWordBreaks);
      let extraSpaces = freeSpace % numberOfWordBreaks;

      let result = '';
      for (let i = 0; i < words.length; i++) {
        const word = words[i];

        result += word;

        if (i !== words.length - 1) {
          result += pad(minSpacing);

          if (extraSpaces > 0) {
            result += pad(1);
            extraSpaces--;
          }
        }
      }

      return result;
    }
  }

  function buildLastLine(words: string[], maxWidth: number) {
    const line = words.join(' ');

    return line + pad(maxWidth - line.length);
  }

  function fullJustify(words: string[], maxWidth: number): string[] {
    let result: string[] = [];

    let line: string[] = [];
    let occupiedByWords = 0;

    while (words.length > 0) {
      const word = words[0];
      const wordLen = word.length;

      if (occupiedByWords + wordLen + line.length <= maxWidth) {
        occupiedByWords += wordLen;
        line.push(word);
        words.shift();
        continue;
      }

      result.push(buildLine(line, maxWidth));

      line = [];
      occupiedByWords = 0;
    }

    result.push(buildLastLine(line, maxWidth));

    return result;
  }

  console.log(
    fullJustify(['This', 'is', 'my', 'sweet', 'it', 'fraagon', 'ita', 'it', 'aaaa'], 12), // .join('\n'),
  );

  console.log(
    fullJustify(['T', 'A', 'B'], 5), // .join('\n'),
  );
}
