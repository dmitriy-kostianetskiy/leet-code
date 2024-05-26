namespace CanPartition1 {
  function canPartition(nums: number[]): boolean {
    const n = nums.length;

    const sum = nums.reduce((acc, item) => acc + item, 0);

    if (sum % 2 === 1) {
      return false;
    }

    const halfSum = sum / 2;

    const cache = Array.from(new Array(halfSum + 1), () => Array(n + 1).fill(null));

    function solve(reminder: number, index = 0) {
      if (reminder < 0) {
        return false;
      }

      if (index === n) {
        return reminder === 0;
      }

      if (cache[reminder][index] !== null) {
        return cache[reminder][index];
      }

      const item = nums[index];

      return (cache[reminder][index] =
        solve(reminder - item, index + 1) || solve(reminder, index + 1));
    }

    return solve(Math.floor(sum / 2));
  }

  console.log(canPartition([1, 5, 11, 5]));
  console.log(canPartition([1, 2, 3, 5]));
  console.log(
    canPartition([
      1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3,
      5, 1, 2, 3, 5,
    ]),
  );
}
