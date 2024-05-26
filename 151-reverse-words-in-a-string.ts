namespace Problem151 {
  function reverseWords(s: string): string {
    return s
      .split(' ')
      .filter((x) => x)
      .reverse()
      .join(' ');
  }

  console.log(reverseWords('a good   example'));
}
