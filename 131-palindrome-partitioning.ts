namespace Problem131 {
  function partition(s: string): string[][] {
    const palindromes = new Map<string, boolean>();

    function isPalindrome(line: string) {
      const cached = palindromes.get(line);

      if (cached !== undefined) {
        return cached;
      }

      let l = 0;
      let r = line.length - 1;

      while (r > l) {
        if (line[l] !== line[r]) {
          return false;
        }

        l++;
        r--;
      }

      palindromes.set(line, true);

      return true;
    }

    const result: string[][] = [];

    function solve(start = 0, buffer: string[]) {
      if (start === s.length) {
        result.push(buffer);
        return;
      }

      for (let len = 1; len <= s.length - start; len++) {
        const line = s.slice(start, start + len);

        if (isPalindrome(line)) {
          solve(start + len, [...buffer, line]);
        }
      }
    }

    solve(0, []);

    return result;
  }

  console.log(JSON.stringify(partition('aab')));
  console.log(JSON.stringify(partition('a')));
  console.log(JSON.stringify(partition('aabb')));
  console.log(JSON.stringify(partition('aabbcc11ccbbaa')));
}
