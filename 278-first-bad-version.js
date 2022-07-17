var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const middle = Math.floor(left + (right - left) / 2);
      const isBad = isBadVersion(middle);

      if (isBad) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }

    return left;
  };
};
