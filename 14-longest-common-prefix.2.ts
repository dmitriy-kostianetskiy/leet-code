namespace Problem14_2 {
  function longestCommonPrefix(strs: string[]): string {
    return strs.reduce((acc, item) => {
      while (!item.startsWith(acc)) {
        acc = acc.substring(0, acc.length - 1);
      }

      return acc;
    }, strs[0]);
  }

  // console.log(longestCommonPrefix(['a']));
  // console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
  console.log(longestCommonPrefix(['c', 'acc', 'ccc']));
}
