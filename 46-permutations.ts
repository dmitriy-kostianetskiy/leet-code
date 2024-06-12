namespace Problem46 {
  function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    function trace(val: number[]) {
      if (val.length === nums.length) {
        result.push([...val]);
        return;
      }

      for (let i = 0; i < nums.length; i++) {
        if (val.findIndex((x) => x === nums[i]) !== -1) {
          continue;
        }

        val.push(nums[i]);
        trace(val);
        val.pop();
      }
    }

    trace([]);

    return result;
  }
}
