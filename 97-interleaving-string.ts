namespace Problem97 {
  function isInterleave(s1: string, s2: string, s3: string): boolean {
    const cache: (boolean | null)[][] = Array.from(Array(s1.length + 1), () =>
      Array(s2.length + 1).fill(null),
    );

    function solve(index1: number, index2: number): boolean {
      if (index1 + index2 === s3.length) {
        return true;
      }

      const cachedValue = cache[index1][index2];
      if (cachedValue !== null) {
        return cachedValue;
      }

      const s1Char = s1.charAt(index1);
      const s2Char = s2.charAt(index2);

      const s3Char = s3.charAt(index1 + index2);

      let isValid = false;

      if (s3Char === s1Char) {
        isValid = isValid || solve(index1 + 1, index2);
      }

      if (!isValid && s3Char === s2Char) {
        isValid = isValid || solve(index1, index2 + 1);
      }

      return (cache[index1][index2] = isValid);
    }

    return s1.length + s2.length === s3.length && solve(0, 0);
  }

  console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
  console.log(isInterleave('a', 'b', 'a'));
}
