/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;

  const secretMap = new Array(10);
  secretMap.fill(0);

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] !== guess[i]) {
      const digit = +secret[i];
      secretMap[digit]++;
    } else {
      bulls++;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secret[i] && secretMap[+guess[i]]) {
      secretMap[+guess[i]]--;
      cows++;
    }
  }

  return `${bulls}A${cows}B`;
};

// tests
console.assert(getHint('1807', '7810') === '1A3B');
console.assert(getHint('1123', '0111') === '1A1B');
console.assert(getHint('1122', '1222') === '3A0B');
