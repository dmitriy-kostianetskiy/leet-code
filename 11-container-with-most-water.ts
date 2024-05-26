namespace Problem11 {
  function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let max = 0;

    while (r > l) {
      const left = height[l];
      const right = height[r];

      max = Math.max(max, Math.min(left, right) * (r - l));

      if (left < right) {
        l++;
      } else {
        r--;
      }
    }

    return max;
  }

  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
}
