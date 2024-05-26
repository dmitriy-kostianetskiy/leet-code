namespace Problem219 {
  function containsNearbyDuplicate(nums: number[], k: number): boolean {
    if (k === 0) {
      return false;
    }

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const x = nums[i];

      if (i + k < nums.length) {
        const y = nums[i + k];

        if (y === x) {
          return true;
        }
      }

      if (i - k >= 0) {
        const y = nums[i - k];

        if (y === x) {
          return true;
        }
      }

      if (map.has(x) && Math.abs(map.get(x) - i) <= k) {
        return true;
      }

      map.set(x, i);

      if (i - k >= 0) {
        map.delete(nums[i - k]);
      }
    }

    return false;
  }
}
