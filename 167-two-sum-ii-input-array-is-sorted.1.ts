namespace Problem167_1 {
  function twoSum(numbers: number[], target: number): number[] {
    function search(l: number, r: number, s: number) {
      while (r >= l) {
        const m = l + Math.floor((r - l) * 0.5);

        if (numbers[m] > s) {
          r = m - 1;
        } else if (numbers[m] < s) {
          l = m + 1;
        } else {
          return m;
        }
      }

      return -1;
    }

    for (let i = 0; i < numbers.length; i++) {
      const s = target - numbers[i];
      let l = i + 1;
      let r = numbers.length - 1;

      const index = search(l, r, s);

      if (index !== -1) {
        return [i + 1, index + 1];
      }
    }

    return [];
  }

  // l = 1
  // r = 3
  // m = 1 + (3 - 1) / 2 = 2

  // console.log(twoSum([2, 7, 11, 15], 9));
  // console.log(twoSum([2, 3, 4], 6));
  // console.log(twoSum([-1, 0], -1));
  console.log(twoSum([1, 3, 4, 4], 8));
}
