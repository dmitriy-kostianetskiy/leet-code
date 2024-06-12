namespace Problem17 {
  const KEYBOARD = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  function letterCombinations(digits: string): string[] {
    if (!digits) {
      return [];
    }

    const result: string[] = [];

    function trace(digitIndex: number, word: string) {
      if (digitIndex === digits.length) {
        result.push(word);
        return;
      }

      const digit = digits[digitIndex];
      const chars = KEYBOARD[digit] as string[];

      chars.forEach((char) => {
        trace(digitIndex + 1, word + char);
      });
    }

    trace(0, '');

    return result;
  }

  console.log(letterCombinations('2'));
  console.log(letterCombinations('22'));
}
