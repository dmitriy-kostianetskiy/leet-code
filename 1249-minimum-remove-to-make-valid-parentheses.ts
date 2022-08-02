function minRemoveToMakeValid(s: string): string {
  const stack: number[] = [];
  const characters: string[] = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        characters[i] = '';
      }
    }
  }

  while (stack.length > 0) {
    characters[stack.pop()!] = '';
  }

  return characters.join('');
}

console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
console.log(minRemoveToMakeValid('lee(t(c)ode'));
console.log(minRemoveToMakeValid('(()((('));
