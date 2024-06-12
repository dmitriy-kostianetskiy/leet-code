namespace Problem70 {
  /**
   * @description fibonacci
   */
  function climbStairs(n: number): number {
    let p1 = 1;
    let p2 = 1;

    for (let i = 2; i <= n; i++) {
      const t = p2;
      p2 = p1 + p2;
      p1 = t;
    }

    return p2;
  }
}
