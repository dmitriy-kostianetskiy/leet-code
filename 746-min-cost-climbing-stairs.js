/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let d = [];

  for (let i = 0; i <= cost.length; i++) {
    if (i < 2) {
      // first two steps can be reached out for free
      d[i] = 0;
    } else {
      // every next step can be reached out either by moving two steps back or one step back
      d[i] = Math.min(d[i - 2] + cost[i - 2], d[i - 1] + cost[i - 1]);
    }
  }

  return d[d.length - 1];
};

// tests
console.assert(minCostClimbingStairs([10, 15, 20]) === 15);

console.assert(
  minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) === 6
);
