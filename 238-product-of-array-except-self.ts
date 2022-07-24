function productExceptSelf(nums: number[]): number[] {
  const dp = [1];

  for (let i = 1; i <= nums.length; i++) {
    dp[i] = dp[i - 1] * nums[i - 1];
  }

  let answer: number[] = [];
  let t = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = dp[i] * t;
    t *= nums[i];
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
