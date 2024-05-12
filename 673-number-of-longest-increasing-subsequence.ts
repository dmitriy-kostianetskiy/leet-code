function findNumberOfLIS(nums: number[]): number {
  const n = nums.length;

  const length = new Array<number>(n);
  length.fill(1);
  const count = new Array<number>(n);
  count.fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] <= nums[j]) {
        continue;
      }

      if (length[j] + 1 > length[i]) {
        length[i] = length[j] + 1;
        count[i] = 0;
      }

      if (length[j] + 1 === length[i]) {
        count[i] += count[j];
      }
    }
  }

  let result = 0;
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    if (length[i] > maxLength) {
      maxLength = length[i];
      result = 0;
    }

    if (length[i] === maxLength) {
      result += count[i];
    }
  }

  return result;
}

console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]));

// x = [1,2,4,3,5,4,7,2]
// maxL = 0;

// i = 3
// j = [0, 1]

// length[0] = 1
// length[1] = 2
// length[2] = 3
// length[3] = 3
// length[4] = 4
// length[5] = 4
// length[6] = 5 <-

// count[0] = 1
// count[1] = 1
// count[2] = 1
// count[3] = 1
// count[4] = 2
// count[5] = 1
// count[6] = 3

// 1, 2,

// 2 3 7 101
// 2 3 7 18
// 2 5 7 101
// 2 5 7 18

// 1 2 4 5 7
// 1 2 3 5 7
// 1 2 3 4 7
