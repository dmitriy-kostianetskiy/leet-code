namespace Problem14_1 {
  function longestCommonPrefix(strs: string[]): string {
    let [answer, ...all] = strs;

    let l = 0;
    let r = answer.length;

    while (r >= l) {
      const mid = l + Math.floor((r - l) * 0.5);

      const substr = answer.substring(0, mid);

      const failedStringIndex = all.findIndex((item) => !item.startsWith(substr));

      if (failedStringIndex === -1) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return answer.substring(0, r);
  }

  console.log(longestCommonPrefix(['a']));
  console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
}
