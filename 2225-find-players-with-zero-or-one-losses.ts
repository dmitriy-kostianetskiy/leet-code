function findWinners(matches: number[][]): number[][] {
  const results: number[] = [];

  for (let match of matches) {
    const [winner, looser] = match;

    results[looser] = (results[looser] ?? 0) + 1;
    results[winner] = (results[winner] ?? 0) + 0;
  }

  const winners: number[] = [];
  const loosers: number[] = [];

  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      winners.push(i);
    }

    if (results[i] === 1) {
      loosers.push(i);
    }
  }

  return [winners, loosers];
}
