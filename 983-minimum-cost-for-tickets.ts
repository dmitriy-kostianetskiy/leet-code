const COVERAGE = [1, 7, 30];

function mincostTickets(days: number[], costs: number[]): number {
  const lastDay = days[days.length - 1];
  const cache = new Array(lastDay + 1).fill(-1);

  const travelDays = new Set(days);


  function solve(day = 1): number {
    if (day > lastDay) {
      return 0;
    }

    if (!travelDays.has(day)) {
      return solve(day + 1);
    }

    if (cache[day] !== -1) {
      return cache[day];
    }

    cache[day] = Math.min(...costs.map((cost, i) => {
      return cost + solve(day + COVERAGE[i]);
    }));

    return cache[day];
  }

  return solve();
}
