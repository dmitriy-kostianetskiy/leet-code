/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  s = `1[${s}]`;

  const isNumber = (c) => c >= '0' && c <= '9';

  const stack = [];
  let i = 0;

  while (i < s.length) {
    const character = s[i];

    if (character === ']') {
      let word = '';

      while (stack[0] !== '[') {
        const p = stack[0];

        word = p + word;

        stack.shift();
      }

      stack.shift();

      let number = '';

      while (isNumber(stack[0])) {
        number = stack[0] + number;

        stack.shift();
      }

      stack.unshift(word.repeat(+number));
    } else {
      stack.unshift(character);
    }

    i++;
  }

  return stack[0];
};

// tests
console.assert(decodeString('3[a]2[bc]') === 'aaabcbc');
console.assert(decodeString('3[a2[c]]') === 'accaccacc');
console.assert(decodeString('2[abc]3[cd]ef') === 'abcabccdcdcdef');
console.log(decodeString('100[leetcode]'));
