class WordDictionaryNode {
  children: WordDictionaryNode[] = [];
  isEndOfWord: boolean = false;

  constructor(public character: string = '') {}

  getChild(character: string): WordDictionaryNode | undefined {
    const index = this.characterToIndex(character);

    return this.children[index];
  }

  getOrCreateChild(
    character: string,
    isEndOfWord: boolean
  ): WordDictionaryNode {
    const index = this.characterToIndex(character);

    if (!this.children[index]) {
      this.children[index] = new WordDictionaryNode(character);
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

class WordDictionary {
  private root: WordDictionaryNode;
  private map: Set<string>;

  constructor() {
    this.root = new WordDictionaryNode();
    this.map = new Set<string>();
  }

  addWord(word: string): void {
    let node = this.root;
    const wordArray = word.split('');

    for (let i = 0; i < wordArray.length; i++) {
      node = node.getOrCreateChild(wordArray[i], i === wordArray.length - 1);
    }
  }

  search(word: string): boolean {
    const wordArray = word.split('');

    return this.match(wordArray, 0, this.root);
  }

  private match(
    word: string[],
    index: number,
    node: WordDictionaryNode | undefined
  ): boolean {
    if (!node) {
      return false;
    }

    if (index === word.length) {
      return node.isEndOfWord;
    }

    if (word[index] === '.') {
      for (let child of node.children) {
        if (this.match(word, index + 1, child)) {
          return true;
        }
      }

      return false;
    }

    const child = node.getChild(word[index]);

    return this.match(word, index + 1, child);
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad')); // return False
console.log(wordDictionary.search('bad')); // return True
console.log(wordDictionary.search('.ad')); // return True
console.log(wordDictionary.search('b..')); // return True
