/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const isLast = i === s.length - 1;
    const cur = s[i];
    const next = isLast ? undefined : s[i + 1];

    if (cur === 'I' && next === 'V') {
      sum += 4;
      i++;
    } else if (cur === 'I' && next === 'X') {
      sum += 9;
      i++;
    } else if (cur === 'I') {
      sum++;
    } else if (cur === 'V') {
      sum += 5;
    } else if (cur === 'X' && next === 'L') {
      sum += 40;
      i++;
    } else if (cur === 'X' && next === 'C') {
      sum += 90;
      i++;
    } else if (cur === 'X') {
      sum += 10;
    } else if (cur === 'L') {
      sum += 50;
    } else if (cur === 'C' && next === 'D') {
      sum += 400;
      i++;
    } else if (cur === 'C' && next === 'M') {
      sum += 900;
      i++;
    } else if (cur === 'C') {
      sum += 100;
    } else if (cur === 'D') {
      sum += 500;
    } else if (cur === 'M') {
      sum += 1000;
    }
  }

  return sum;
};
