function firstMissingPositive(nums: (number | boolean)[]): number {
  let curIndex = 0;
  let nextIndex = 1;

  let val = nums[curIndex];

  while (nextIndex !== nums.length + 1) {
    val = nums[curIndex];

    if (typeof val === 'number') {
      nums[curIndex] = false;
    }

    while (typeof val === 'number' && val > 0 && val <= nums.length) {
      const p = nums[val - 1];
      nums[val - 1] = true;
      val = p;
    }

    curIndex = nextIndex;
    nextIndex++;
  }

  for (let i = 0; i < nums.length; i++) {
    const t = nums[i];
    if (typeof t !== 'boolean' || (typeof t === 'boolean' && !t)) {
      return i + 1;
    }
  }

  return nums.length + 1;
}

console.log(firstMissingPositive([6, 1e8, 1, 4, 1e9, 2]));
console.log(firstMissingPositive([1, 2, 3, 4]));
console.log(firstMissingPositive([1, 2, 3, 5]));
console.log(firstMissingPositive([19, 3, 2, 1]));
