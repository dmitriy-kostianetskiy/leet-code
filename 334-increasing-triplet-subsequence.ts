function increasingTriplet(nums: number[]): boolean {
  let big1 = Number.MAX_SAFE_INTEGER,
    big2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num <= big1) {
      big1 = num;
    } else if (num <= big2) {
      big2 = num;
    } else {
      return true;
    }
  }

  return false;
}

console.assert(increasingTriplet([1, 2, 3, 4, 5]) === true);
console.assert(increasingTriplet([5, 4, 3, 2, 1]) === false);
console.assert(increasingTriplet([2, 1, 5, 0, 4, 6]) === true);
console.assert(increasingTriplet([1, 1, 1, 1]) === true);
