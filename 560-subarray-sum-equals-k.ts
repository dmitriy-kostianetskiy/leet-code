function subarraySum(nums: number[], k: number): number {
  const map = {};

  let sum = 0;
  let result = 0;
  map[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map[sum - k]) {
      result += map[sum - k];
    }

    map[sum] = (map[sum] || 0) + 1;
  }

  return result;
}

console.log(subarraySum([1, 2, 3, 4, 5, -4], 5));

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
