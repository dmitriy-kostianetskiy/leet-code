/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const t = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let r = [];

  for (let i = 0; i < t.length; i++) {
    const d = t[i][0];
    const l = t[i][1];

    const m = Math.floor(num / d);

    if (m > 0) {
      r.push(l.repeat(m));
    }

    num -= m * d;
  }

  return r.join('');
};
