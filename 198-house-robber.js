/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let a = 0,
    b = 0;

  for (let i = 0; i < nums.length; i++) {
    const t = nums[i];

    if (i % 2) {
      a = Math.max(a + t, b);
    } else {
      b = Math.max(b + t, a);
    }
  }

  return Math.max(a, b);
};

//  [10, 400, 10, 1, 10, 1]

// a = 0
// b = 0

// i = 0, nums[i] = 10
// a = 0
// b = max(0 + 10, 0) = 10

// i = 1, nums[i] = 400
// a = max(0 + 400, 10) = 400
// b = 10

// i = 2, nums[i] = 10
// a = 400
// b = max(10 + 10, 400) = 400

// i = 3, nums[i] = 1
// a = max(400 + 1, 400) = 401
// b = 400

// i = 4, nums[i] = 10
// a = 401
// b =  max(400 + 10, 401) = 410

// i = 5, nums[i] = 1
// a = max(401 + 1, 410) = 410
// b = 410

// result = max(410, 410)
