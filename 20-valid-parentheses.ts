namespace Problem20 {
  function isValid(s: string): boolean {
    const stack: string[] = [];

    for (const char of s) {
      if ('([{'.includes(char)) {
        stack.push(char);
        continue;
      }

      const top = stack.pop();

      if (
        (top === '{' && char === '}') ||
        (top === '(' && char === ')') ||
        (top === '[' && char === ']')
      ) {
        continue;
      }

      return false;
    }

    return stack.length === 0;
  }

  console.log(isValid('()[]{}'));
  console.log(isValid('{{}})'));
  console.log(isValid('{{'));
  console.log(isValid('{{()}}'));
}
