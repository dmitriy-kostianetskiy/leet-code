function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, haystack.length).startsWith(needle)) {
      return i;
    }
  }

  return -1;
}

strStr('hello', 'll');
