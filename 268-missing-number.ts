function missingNumber(nums: number[]): number {
  return nums.reduce((acc, x, i) => acc ^ x ^ i, nums.length);
}

console.log(missingNumber([0, 3, 1]));
