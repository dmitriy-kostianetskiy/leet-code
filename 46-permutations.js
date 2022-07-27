/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  const rec = (tmp) => {
    if (tmp.length === nums.length) {
      res.push([...tmp]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (tmp.findIndex((x) => x === nums[i]) !== -1) {
          continue;
        }

        tmp.push(nums[i]);
        rec(tmp);
        tmp.pop();
      }
    }
  };

  rec([]);

  return res;
};
