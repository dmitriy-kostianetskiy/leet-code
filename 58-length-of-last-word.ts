function lengthOfLastWord(s: string): number {
  return s
    .split(' ')
    .filter((x) => !!x)
    .pop()!.length;
}
