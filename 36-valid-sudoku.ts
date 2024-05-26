namespace Problem36 {
  function hasDuplicates(array: string[]) {
    const map = new Set<string>();

    for (const item of array) {
      if (item === '.') {
        continue;
      }

      if (map.has(item)) {
        return true;
      }

      map.add(item);
    }

    return false;
  }

  function isValidSudoku(board: string[][]): boolean {
    const n = 9;

    // check rows
    for (let i = 0; i < n; i++) {
      if (hasDuplicates(board[i])) {
        return false;
      }
    }

    // check cols
    for (let i = 0; i < n; i++) {
      const array = board.reduce<string[]>((acc, item) => {
        acc.push(item[i]);
        return acc;
      }, []);

      if (hasDuplicates(array)) {
        return false;
      }
    }

    // check quads
    for (let i = 0; i < n; i += 3) {
      for (let j = 0; j < n; j += 3) {
        // get quad
        const array: string[] = [];

        for (let x = i; x < i + 3; x++) {
          for (let y = j; y < j + 3; y++) {
            array.push(board[x][y]);
          }
        }

        if (hasDuplicates(array)) {
          return false;
        }
      }
    }

    return true;
  }
}
