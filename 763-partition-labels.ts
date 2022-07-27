function partitionLabels(s: string): number[] {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  const result: number[] = [];
  let p1 = 0;
  let p2 = 0;
  let last = 0;

  while (p1 < s.length) {
    p2 = Math.max(p2, map.get(s[p1]) ?? 0);

    if (p1 === p2) {
      result.push(p2 - last + 1);
      last = p2 = p2 + 1;
    }

    p1++;
  }

  return result;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('abcd'));
console.log(partitionLabels('abacdc'));
