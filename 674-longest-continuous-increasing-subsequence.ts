function findLengthOfLCIS(nums: number[]): number {
  const n = nums.length;
  
  let maxLength = 1;
  let counter = 1;

  for (let i = 1; i < n;i++) {
    if (nums[i] > nums[i-1]) {
      counter++;

      if (counter > maxLength) {
        maxLength = counter;
      }

    } else {
      counter = 1;
    }
  }


  return maxLength;
};


console.log(findLengthOfLCIS([1,3,5,4,7,8,9]));

// [1,3,5,4,7]

// [1,3,5]


// 1  d[0] = 1
// 3  d[1] = 2
// 5  d[2] = 3
// 4  d[3] = 1
// 7  d[4] = 2
