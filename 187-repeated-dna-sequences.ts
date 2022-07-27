function findRepeatedDnaSequences(s: string): string[] {
  const result = new Set<string>();
  const all = new Set<string>();

  for (let i = 0; i < s.length - 9; i++) {
    const candidate = s.slice(i, i + 10);

    if (all.has(candidate)) {
      result.add(candidate);
    } else {
      all.add(candidate);
    }
  }

  return Array.from(result);
}

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
