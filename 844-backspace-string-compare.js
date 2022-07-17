/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const type = (inputString) => {
    let stack = [];

    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === '#') {
        stack.shift();
      } else {
        stack.unshift(inputString[i]);
      }
    }

    return stack;
  };

  let stack1 = type(s);
  let stack2 = type(t);

  if (stack1.length != stack2.length) {
    return false;
  }

  while (stack1.length > 0 && stack2.length > 0) {
    if (stack1[0] !== stack2[0]) {
      return false;
    }

    stack1.shift();
    stack2.shift();
  }

  return true;
};

//tests
console.assert(backspaceCompare('ab#c', 'ad#c') === true);
console.assert(backspaceCompare('ab##', 'c#d#') === true);

console.assert(backspaceCompare('a#c', 'b') === false);
