function jump(nums: number[]): number {
  let f = 0;
  let jumps = 0;
  let end = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    f = Math.max(f, i + nums[i]);

    if (end === i) {
      jumps++;
      end = f;
    }
  }

  return jumps;
}

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
