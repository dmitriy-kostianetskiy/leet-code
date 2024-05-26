namespace Problem30 {
  function findWordIndex(substring: string, words: string[], usedWords: Set<number>): number {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (substring === word && !usedWords.has(i)) {
        return i;
      }
    }

    return -1;
  }

  function findSubstring(s: string, words: string[]): number[] {
    const wordLength = words[0].length;
    const result: number[] = [];

    for (let offset = 0; offset < wordLength; offset++) {
      let l = offset;
      let r = offset;

      const usedWords = new Set<number>();
      let path: number[] = [];

      while (r < s.length) {
        const substring = s.substring(r, r + wordLength);

        const wordIndex = findWordIndex(substring, words, usedWords);

        if (wordIndex === -1) {
          const removedIndex = path.shift();

          l += wordLength;

          if (removedIndex !== undefined) {
            usedWords.delete(removedIndex);
          } else {
            r = l;
          }
        } else {
          usedWords.add(wordIndex);
          path.push(wordIndex);
          r += wordLength;

          if (usedWords.size === words.length) {
            const removedIndex = path.shift()!;
            usedWords.delete(removedIndex);
            result.push(l);

            l += wordLength;
          }
        }
      }
    }

    return result;
  }

  //{
  //  0: [1],
  //  3: [0],
  //  9: [0],
  //  12: [1],
  //}

  //path: 1
  //r: 3
  //l: 0

  console.log(JSON.stringify(findSubstring('barfoothefoobarman', ['foo', 'bar']))); //[0,9]
  // console.log(
  //   JSON.stringify(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])),
  // ); //[]
  console.log(JSON.stringify(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']))); //[6,9,12]
  console.log(JSON.stringify(findSubstring('bbbbbb', ['bb', 'bb']))); // [1,2,3]

  //{
  //  0: [0, 1],
  //  1: [0, 1],
  //  2: [0, 1],
  //  3: [0, 1],
  //  4: [0, 1],
  //}

  // iter 1: 0
  // 0 -> [0]
  // 2 -> [1]
  // res = [0]

  // iter 2: 1
  // 1 -> [0]
  // 1 -> [1]

  // iter 3: 2
  // 2 -> [0]
  // 4 -> [1]
}

/*
"barfoothefoobarman"
["foo","bar"]
"wordgoodgoodgoodbestword"
["word","good","best","word"]
"barfoofoobarthefoobarman"
["bar","foo","the"]
"bbbb"
["bb","bb"]
"bbbbbb"
["bb","bb"]
*/
