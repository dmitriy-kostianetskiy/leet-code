function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;

  let total = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    const d = gas[i] - cost[i];

    total += d;
    tank += d;

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  }

  return total < 0 ? -1 : start;
}

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));
// g = [5, 8, 2, 8]
// c = [6, 5, 6, 6]
// x = [-1, 3, -4, 2]

// t = -2

// x = [-1, 3, -4, 2]
// c = [-1, 2, -2, 0]

// g = [1,2,3,4,5]
// c = [3,4,5,1,2]
// x = [-2, -2, -2, 3, 3]

// t =  -6

// c = [-2, -4, -6, -3, 0]

// g = [5,1,2,3,4]
// c = [2,3,4,5,1]
// x = [3,-2,-2,-2, 3]
// c = [3,-1,-3,-5,-2]
