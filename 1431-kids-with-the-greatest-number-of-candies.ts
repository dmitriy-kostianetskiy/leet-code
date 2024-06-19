namespace Problem1431 {
  function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies);

    return candies.map((current) => current + extraCandies >= max);
  }
}
