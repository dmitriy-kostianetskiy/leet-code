function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }

  const characterToWord = new Map<string, string>();
  const wordToCharacter = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    const character = pattern[i];
    const word = words[i];

    if (!characterToWord.has(character)) {
      characterToWord.set(character, word);
    }

    if (!wordToCharacter.has(word)) {
      wordToCharacter.set(word, character);
    }

    if (
      characterToWord.get(character) !== word ||
      wordToCharacter.get(word) !== character
    ) {
      return false;
    }
  }

  return true;
}

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abaa', 'dog cat cat dog'));
console.log(wordPattern('abca', 'dog cat cat dog'));
console.log(wordPattern('abca', 'dog cat'));
