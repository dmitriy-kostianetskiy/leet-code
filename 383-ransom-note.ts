namespace Problem383 {
  function canConstruct(ransomNote: string, magazine: string): boolean {
    const hash = new Map<string, number>();

    for (let i = 0; i < magazine.length; i++) {
      const char = magazine[i];

      hash.set(char, (hash.get(char) ?? 0) + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
      const char = ransomNote[i];
      const value = hash.get(char) ?? 0;

      if (value > 0) {
        hash.set(char, (hash.get(char) ?? 0) - 1);
        continue;
      }

      return false;
    }

    return true;
  }

  canConstruct('aa', 'ab');
}
