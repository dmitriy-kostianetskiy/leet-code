namespace Problem1206 {
  const MAX_LEVEL = Math.floor(Math.log2(5 * 10 ** 4));

  class Node {
    forwards: Node[];

    constructor(public value: number, level: number) {
      this.forwards = new Array(level + 1).fill(null);
    }
  }

  class Skiplist {
    private head: Node = new Node(-Infinity, MAX_LEVEL);
    private level = 0;

    constructor(private p = 0.5) {}

    private randomLevel(): number {
      let level = 0;
      while (Math.random() < this.p && level < MAX_LEVEL) {
        level++;
      }
      return level;
    }

    private getUpdate(num: number): Node[] {
      const update: Node[] = new Array(MAX_LEVEL + 1).fill(null);
      let current = this.head;

      for (let i = this.level; i >= 0; i--) {
        while (current.forwards[i] && current.forwards[i].value < num) {
          current = current.forwards[i];
        }
        update[i] = current;
      }

      return update;
    }

    search(target: number): boolean {
      let current = this.head;

      for (let i = this.level; i >= 0; i--) {
        while (current.forwards[i] && current.forwards[i].value < target) {
          current = current.forwards[i];
        }
      }

      current = current.forwards[0];
      return current !== null && current.value === target;
    }

    add(num: number): void {
      const update = this.getUpdate(num);
      const randomLevel = this.randomLevel();

      if (randomLevel > this.level) {
        for (let i = this.level + 1; i <= randomLevel; i++) {
          update[i] = this.head;
        }
        this.level = randomLevel;
      }

      const node = new Node(num, randomLevel);

      for (let i = 0; i <= randomLevel; i++) {
        node.forwards[i] = update[i].forwards[i];
        update[i].forwards[i] = node;
      }
    }

    erase(num: number): boolean {
      const update = this.getUpdate(num);
      const cur = update[0].forwards[0];

      if (!cur || cur.value !== num) {
        return false;
      }

      for (let i = 0; i <= this.level; i++) {
        if (update[i].forwards[i] !== cur) {
          break;
        }
        update[i].forwards[i] = cur.forwards[i];
      }

      while (this.level > 0 && this.head.forwards[this.level] === null) {
        this.level--;
      }

      return true;
    }
  }

  const skipList = new Skiplist();
  skipList.add(1);
  skipList.add(2);
  skipList.add(3);
  console.log(skipList.search(1));
  console.log(skipList.search(2));
  console.log(skipList.search(3));
  console.log(skipList.search(5));
  skipList.add(4);
  skipList.add(5);
  console.log(skipList.search(5));
  console.log(skipList.search(4));
  console.log(skipList.erase(3));
  console.log(skipList.erase(10));
  console.log(skipList.erase(1));
  console.log(skipList.erase(2));
  console.log(skipList.erase(3));
  console.log(skipList.erase(4));
  console.log(skipList.erase(5));
}
