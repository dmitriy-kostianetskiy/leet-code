function longestValidParentheses(s: string): number {
  const stack: [string, number][] = [];
  const f: boolean[] = new Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(['(', i]);
      continue;
    }

    if (stack.length === 0) {
      stack.push([')', i]);
      continue;
    }

    const [top, topIndex] = stack[stack.length - 1];

    if (top === '(') {
      f[topIndex] = f[i] = true;

      stack.pop();
      continue;
    }

    stack.push([')', i]);
  }

  let max = 0;
  let cur = 0;

  for (const flag of f) {
    if (!flag) {
      cur = 0;
    } else {
      cur++;

      max = Math.max(max, cur);
    }
  }

  return max;
}

console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('()(()'));
