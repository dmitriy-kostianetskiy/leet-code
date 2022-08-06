// class SkipListNode {
//   next: (SkipListNode | undefined)[] = [];

//   constructor(readonly item?: number) {}

//   getNextValue(level: number): number | undefined {
//     return this.next[level]?.item;
//   }

//   getNext(level: number): SkipListNode | undefined {
//     return this.next[level];
//   }
// }

// class Skiplist {
//   private root: SkipListNode = new SkipListNode();

//   constructor(readonly maxLevel = 4) {}

//   search(key: number): boolean {
//     let node: SkipListNode | undefined = this.root;
//     let level = this.root.next.length - 1;

//     while (node) {
//       const next = node.next[level];

//       if (next) {
//         if (key === next.item) {
//           return true;
//         }

//         if (key > next.item) {
//           node = next;
//           continue;
//         }
//       }

//       if (level === 0) {
//         return false;
//       }

//       --level;
//     }

//     return false;
//   }

//   add(item: number) {
//     const update: SkipListNode[] = [];

//     let node: SkipListNode = this.root;

//     for (let level = this.maxLevel; level >= 0; level--) {
//       while (true) {
//         const nextNode = node.getNext(level);

//         if (!nextNode || !nextNode.item || item <= nextNode.item) {
//           break;
//         }

//         node = nextNode;
//       }

//       update[level] = node;
//     }

//     const randomLevel = this.randomLevel();
//     const newNode = new SkipListNode(item);
//     for (let level = randomLevel; level >= 0; level--) {
//       const next = update[level].next[level];
//       update[level].next[level] = newNode;
//       newNode.next[level] = next;
//     }
//   }

//   erase(num: number) {}

//   print() {
//     for (let i = 0; i < this.maxLevel; i++) {
//       let node: SkipListNode | undefined = this.root;
//       let line: number[] = [];

//       while (node) {
//         if (node.item) {
//           line.push(node.item);
//         }

//         node = node.next[i];
//       }

//       console.log(`(${i}) ${line.join(" -> ")} -> NULL`);
//     }
//   }

//   private randomLevel(): number {
//     let level = 0;

//     while (Math.random() < 0.5 && level < this.maxLevel) {
//       level++;
//     }
//     return level;
//   }
// }

// const skipList = new Skiplist();

// for (let i = 0; i < 20; i++) {
//   skipList.add(20 - i);
// }

// skipList.print();

// for (let i = 0; i < 20; i++) {
//   console.log(skipList.search(20 - i));
// }

// console.log(skipList.search(1000));
// console.log(skipList.search(500));
// console.log(skipList.search(-500));

class SkipListNode {
  next?: SkipListNode;
  down?: SkipListNode;

  constructor(readonly value: number) {}
}

class Skiplist {
  private root: SkipListNode = new SkipListNode(-1);

  constructor(readonly maxLevel = 4) {}

  search(key: number): boolean {
    let currentNode: SkipListNode | undefined = this.root;

    while (currentNode) {
      while (currentNode.next && key > currentNode.next.value) {
        currentNode = currentNode.next;
      }

      if (currentNode.value === key) {
        return true;
      }

      currentNode = currentNode.down;
    }

    return false;
  }

  add(item: number) {
    const update: SkipListNode[] = [];

    let node: SkipListNode = this.root;

    // for (let level = this.maxLevel; level >= 0; level--) {
    //   while (true) {
    //     const nextNode = node.getNext(level);

    //     if (!nextNode || !nextNode.item || item <= nextNode.item) {
    //       break;
    //     }

    //     node = nextNode;
    //   }

    //   update[level] = node;
    // }

    // const randomLevel = this.randomLevel();
    // const newNode = new SkipListNode(item);
    // for (let level = randomLevel; level >= 0; level--) {
    //   const next = update[level].next[level];
    //   update[level].next[level] = newNode;
    //   newNode.next[level] = next;
    // }
  }

  erase(num: number) {}

  print() {
    for (let i = 0; i < this.maxLevel; i++) {
      let node: SkipListNode | undefined = this.root;
      let line: number[] = [];

      while (node) {
        if (node.item) {
          line.push(node.item);
        }

        node = node.next[i];
      }

      console.log(`(${i}) ${line.join(" -> ")} -> NULL`);
    }
  }

  private randomLevel(): number {
    let level = 0;

    while (Math.random() < 0.5 && level < this.maxLevel) {
      level++;
    }
    return level;
  }
}

const skipList = new Skiplist();

for (let i = 0; i < 20; i++) {
  skipList.add(20 - i);
}

skipList.print();

for (let i = 0; i < 20; i++) {
  console.log(skipList.search(20 - i));
}

console.log(skipList.search(1000));
console.log(skipList.search(500));
console.log(skipList.search(-500));
