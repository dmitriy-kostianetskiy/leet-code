namespace Problem212 {
  class TrieNode {
    children: (TrieNode | undefined)[] = [];
    isEndOfWord: boolean = false;

    constructor(public character: string = '') {}

    hasChildren(): boolean {
      return this.children.some((item) => item);
    }

    getChild(character: string): TrieNode | undefined {
      const index = this.characterToIndex(character);

      return this.children[index];
    }

    getOrCreateChild(character: string, isEndOfWord: boolean): TrieNode {
      const index = this.characterToIndex(character);

      if (!this.children[index]) {
        this.children[index] = new TrieNode(character);
      }

      if (isEndOfWord) {
        this.children[index]!.isEndOfWord = true;
      }

      return this.children[index]!;
    }

    removeChild(character: string): void {
      const index = this.characterToIndex(character);
      const node = this.children[index];

      if (!node) {
        return;
      }

      this.children[index] = undefined;
    }

    private characterToIndex(character: string): number {
      return character.charCodeAt(0) - 'a'.charCodeAt(0);
    }
  }

  class Trie {
    root: TrieNode;

    constructor() {
      this.root = new TrieNode();
    }

    insert(word: string): void {
      let node = this.root;

      for (let i = 0; i < word.length; i++) {
        node = node.getOrCreateChild(word[i], i === word.length - 1);
      }
    }

    search(word: string): boolean {
      let node: TrieNode = this.root;

      for (let i = 0; i < word.length; i++) {
        const child = node.getChild(word[i]);

        if (child) {
          node = child;
        } else {
          return false;
        }
      }

      return node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
      let node: TrieNode = this.root;

      for (let i = 0; i < prefix.length; i++) {
        const child = node.getChild(prefix[i]);

        if (child) {
          node = child;
        } else {
          return false;
        }
      }

      return true;
    }

    remove(word: string): void {
      const path: TrieNode[] = [this.root];

      for (let i = 0; i < word.length; i++) {
        const current = path[0];

        const child = current.getChild(word[i]);

        if (child) {
          path.unshift(child);
        } else {
          return;
        }
      }

      if (!path[0].isEndOfWord) {
        return;
      }

      path[0].isEndOfWord = false;

      for (let i = 0; i < path.length - 1; i++) {
        const current = path[i];
        const parent = path[i + 1];

        if (current.hasChildren()) {
          return;
        }

        parent.removeChild(current.character);
      }
    }
  }

  let counter = 0;

  function findWords(board: string[][], words: string[]): string[] {
    const trie = new Trie();
    const result = new Set<string>();

    words.forEach((word) => trie.insert(word));

    function traverseBoard(
      row: number,
      col: number,
      node: TrieNode,
      word: string,
      visited: boolean[][],
    ) {
      const boardRow = board[row];
      if (boardRow === undefined) {
        return;
      }

      const cell = board[row][col];
      if (cell === undefined) {
        return;
      }

      const childNode = node.getChild(cell);

      if (!childNode || visited[row][col]) {
        return;
      }

      visited[row][col] = true;

      const newWord = word + childNode.character;

      if (childNode.isEndOfWord) {
        counter++;
        trie.remove(newWord);
        result.add(newWord);
      }

      traverseBoard(row + 1, col, childNode, newWord, visited);
      traverseBoard(row, col + 1, childNode, newWord, visited);
      traverseBoard(row - 1, col, childNode, newWord, visited);
      traverseBoard(row, col - 1, childNode, newWord, visited);

      visited[row][col] = false;
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const visited = board.map((item) => item.map(() => false));

        traverseBoard(i, j, trie.root, '', visited);
      }
    }

    return Array.from(result);
  }

  findWords(
    [
      ['a', 'b', 'c', 'e'],
      ['x', 'x', 'c', 'd'],
      ['x', 'x', 'b', 'a'],
    ],
    ['abc', 'abcd'],
  );

  findWords([['a', 'a']], ['aaa']);
}
