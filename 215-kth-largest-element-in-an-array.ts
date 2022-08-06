console.log(1);
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

function findKthLargest(nums: number[], k: number): number {
  const pivot = Math.floor(Math.random() * (nums.length - 1));

  const midVal = nums[pivot];

  const left = nums.filter((x) => x > midVal);
  const mid = nums.filter((x) => x === midVal);
  const right = nums.filter((x) => x < midVal);

  if (k <= left.length) {
    return findKthLargest(left, k);
  }

  if (k > left.length + mid.length) {
    return findKthLargest(right, k - left.length - mid.length);
  }

  return midVal;
}
