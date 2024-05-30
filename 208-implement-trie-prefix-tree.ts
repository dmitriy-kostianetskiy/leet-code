namespace Problem208 {
  class TrieNode {
    children: TrieNode[] = [];
    isEndOfWord: boolean = false;

    constructor(public character: string = '') {}

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
        this.children[index].isEndOfWord = true;
      }

      return this.children[index];
    }

    private characterToIndex(character: string): number {
      return character.charCodeAt(0) - 'a'.charCodeAt(0);
    }
  }

  class Trie {
    private root: TrieNode;

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
  }

  const trie = new Trie();
  trie.insert('app');
  trie.insert('apple');
  trie.insert('beer');
  trie.insert('jam');
  trie.insert('rental');
  console.log(trie.search('apps')); // return False
  console.log(trie.search('app')); // return True

  // ["Trie","insert","insert","insert","insert","insert","insert","search","search","search","search","search","search","search","search","search","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith"]
  // [[],["app"],["apple"],["beer"],["add"],["jam"],["rental"],["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"],["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"]]
}
