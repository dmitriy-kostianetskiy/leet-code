class DisjointSets {
  private parent: Map<string, string> = new Map<string, string>();

  add(str: string) {
    this.parent.set(str, str);
  }

  find(str: string) {
    const leader = this.parent.get(str);

    if (!leader) {
      return undefined;
    }

    if (leader === str) {
      return str;
    }

    return (this.parent[str] = this.find(leader));
  }

  union(str1: string, str2: string) {
    const leader1 = this.find(str1);
    const leader2 = this.find(str2);

    if (leader1 === leader2) {
      return;
    }

    if (areSimilar(str1, str2)) {
      this.parent.set(leader2, leader1);
    }
  }
}

function numSimilarGroups(strs: string[]): number {
  const set = new DisjointSets();
  for (let i = 0; i < strs.length; i++) {
    set.add(strs[i]);
  }

  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      set.union(strs[i], strs[j]);
    }
  }

  const roots = new Set<string>();

  for (let i = 0; i < strs.length; i++) {
    const t = set.find(strs[i]);

    roots.add(t);
  }

  return roots.size;
}

const areSimilar = (str1: string, str2: string): boolean => {
  let index1 = -1,
    index2 = -1;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (index1 === -1) {
        index1 = i;
      } else if (index2 === -1) {
        index2 = i;
      } else {
        return false;
      }
    }
  }

  return (
    index2 === -1 ||
    (str1[index1] === str2[index2] && str1[index2] === str2[index1])
  );
};

const a: string[] = [];
const t = ['tars', 'rats', 'arts', 'star'];
for (let i = 0; i < 100; i++) for (let j = 0; j < t.length; j++) a.push(t[j]);

// console.log(numSimilarGroups(a));
// console.log(numSimilarGroups(['omv', 'ovm']));
console.log(
  numSimilarGroups([
    'kccomwcgcs',
    'socgcmcwkc',
    'sgckwcmcoc',
    'coswcmcgkc',
    'cowkccmsgc',
    'cosgmccwkc',
    'sgmkwcccoc',
    'coswmccgkc',
    'kowcccmsgc',
    'kgcomwcccs',
  ])
);
