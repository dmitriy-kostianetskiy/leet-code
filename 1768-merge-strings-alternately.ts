namespace Problem1768 {
  function mergeAlternately(word1: string, word2: string): string {
    const length1 = word1.length;
    const length2 = word2.length;

    let index1 = 0;
    let index2 = 0;

    let result = '';

    while (index1 !== length1 || index2 !== length2) {
      if (index1 < length1) {
        result += word1[index1];
        index1++;
      }

      if (index2 < length2) {
        result += word2[index2];
        index2++;
      }
    }

    return result;
  }

  console.log(mergeAlternately('123', 'abcdef'));
}
