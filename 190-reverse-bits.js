/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  if (n === 0) {
    return 0;
  }

  let result = 0;

  // go over 32 bits in the number
  for (let i = 0; i < 32; i++) {
    // shift result bits to the left
    result = result << 1;
    // set the last bit of result to the last bit of the n
    result |= n & 1;
    // shift the last bit to the right
    n = n >> 1;
  }

  // remove sign bit
  return result >>> 0;
};

// tests
console.assert(reverseBits(43261596) === 964176192);
console.assert(reverseBits(4294967293) === 3221225471);
