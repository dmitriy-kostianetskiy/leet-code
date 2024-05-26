function change(amount: number, coins: number[]): number {
  const cache = Array.from(new Array(coins.length), () => new Array(amount + 1).fill(-1));

  function dfs(coinIndex: number, amount: number) {
    if (amount === 0) {
      return 1;
    }

    if (amount < 0) {
      return 0;
    }

    if (coinIndex === coins.length) {
      return 0;
    }

    const cachedValue = cache[coinIndex][amount];

    if (cachedValue !== -1) {
      return cachedValue;
    }

    return (cache[coinIndex][amount] =
      dfs(coinIndex, amount - coins[coinIndex]) + dfs(coinIndex + 1, amount));
  }

  return dfs(0, amount);
}
