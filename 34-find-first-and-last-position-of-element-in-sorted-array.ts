namespace Problem34 {
  function searchRange(nums: number[], target: number): number[] {
    const search = (direction: 'leftmost' | 'rightmost') => {
      let l = 0;
      let r = nums.length - 1;
      let answer = -1;

      while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);

        if (target > nums[m]) {
          l = m + 1;
        } else if (target < nums[m]) {
          r = m - 1;
        } else {
          if (direction === 'leftmost') {
            r = m - 1;
            answer = m;
          } else {
            l = m + 1;
            answer = m;
          }
        }
      }

      return answer;
    };

    return [search('leftmost'), search('rightmost')];
  }

  console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
  console.log(searchRange([5, 7, 7, 8, 8, 10], 10));
  console.log(searchRange([5, 7, 7, 8, 8, 10], 5));
}
