function removeDuplicates(nums: number[]): number {
  let index = 0;
  let current = Infinity;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== current) {
      current = nums[i];
      counter = 1;
      nums[index++] = nums[i];
      continue;
    }

    if (nums[i] === current) {
      counter++;
    }

    if (counter < 3) {
      nums[index++] = nums[i];
    }
  }

  return index;
}
// const input = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const input = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(input), input);
