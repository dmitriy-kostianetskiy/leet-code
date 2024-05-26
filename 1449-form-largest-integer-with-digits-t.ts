function getBigger(a: string, b: string) {
  if (a.includes('0')) {
    return b;
  }

  if (b.includes('0')) {
    return a;
  }

  if (BigInt(a) > BigInt(b)) {
    return a;
  }

  return b;
}

function largestNumber(cost: number[], target: number): string {
  const dp = Array.from(Array<string[]>(target + 1), () => Array<string>(cost.length).fill(''));

  function solve(capacity: number, costIndex = 0): string {
    if (capacity < 0 || costIndex === cost.length) {
      return '0';
    }

    if (capacity === 0) {
      return '';
    }

    const itemValue = costIndex + 1;
    const itemWeight = cost[costIndex];

    if (dp[capacity][costIndex] !== '') {
      return dp[capacity][costIndex];
    }

    const solution1 = solve(capacity, costIndex + 1);
    const solution2 = solve(capacity - itemWeight, costIndex) + itemValue.toString();

    return (dp[capacity][costIndex] = getBigger(solution1, solution2));
  }

  const num = solve(target);

  if (num.includes('0')) {
    return '0';
  }

  return num;
}

console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9)); // 7772
console.log(largestNumber([7, 6, 5, 5, 5, 6, 8, 7, 8], 12)); // 85
console.log(largestNumber([2, 4, 6, 2, 4, 6, 4, 4, 4], 5)); // 0
console.log(largestNumber([5, 4, 4, 5, 5, 5, 5, 5, 5], 29)); // 9333333
console.log(largestNumber([7, 6, 5, 5, 5, 6, 8, 7, 8], 5000));
