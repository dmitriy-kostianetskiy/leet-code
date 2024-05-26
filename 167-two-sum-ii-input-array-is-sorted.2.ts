namespace Problem167_2 {
  function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;

    while (r > l) {
      let left = numbers[l];
      let right = numbers[r];

      const sum = left + right;

      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return [l + 1, r + 1];
      }
    }

    return [];
  }

  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([2, 3, 4], 6));
  console.log(twoSum([-1, 0], -1));
  console.log(twoSum([1, 3, 4, 4], 8));
}
