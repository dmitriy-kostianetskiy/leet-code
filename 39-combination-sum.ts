namespace Problem39 {
  function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function solve(index: number, target: number, candidate: number[]): void {
      if (target < 0) {
        return;
      }

      if (target === 0) {
        result.push(candidate);

        return;
      }

      if (index === candidates.length) {
        return;
      }

      solve(index + 1, target, candidate);

      const val = candidates[index];

      solve(index, target - val, [...candidate, val]);
    }

    solve(0, target, []);

    return result;
  }

  console.log(JSON.stringify(combinationSum([2, 3, 6, 7], 7)));
}
