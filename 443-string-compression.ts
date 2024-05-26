function compress(chars: string[]): number {
  function push(char: string, counter: number) {
    chars.push(char);

    if (counter > 1) {
      chars.push(...counter.toString().split(''));
    }
  }

  const n = chars.length;

  let current = chars.shift()!;
  let counter = 1;

  for (let i = 1; i < n; i++) {
    const char = chars.shift()!;

    if (current === char) {
      counter++;
      continue;
    }

    push(current, counter);

    current = char;
    counter = 1;
  }

  push(current, counter);

  return chars.length;
}

const input1 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
console.log(compress(input1), input1);
