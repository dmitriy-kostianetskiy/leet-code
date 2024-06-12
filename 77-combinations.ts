namespace Problem77 {
  function combine(n: number, k: number): number[][] {
    const result: number[][] = [];

    function trace(s: number, k: number, combination: number[]) {
      if (k === 0) {
        result.push([...combination]);
        return;
      }

      for (let i = s; i < n; i++) {
        combination.push(i + 1);
        trace(i + 1, k - 1, combination);
        combination.pop();
      }
    }

    trace(0, k, []);

    return result;
  }
}
