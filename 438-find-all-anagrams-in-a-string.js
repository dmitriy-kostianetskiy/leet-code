/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // convert character to number
  const convertCharacterToNum = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0);

  // fill map of characters (use array instead of hash table)
  const fillMap = (map, inputString, l, r) => {
    for (let i = 0; i < map.length; i++) {
      map[i] = 0;
    }

    for (let i = l; i <= r; i++) {
      const character = inputString[i];
      const index = convertCharacterToNum(character);

      map[index]++;
    }
  };

  // create and fill map
  const createMap = (inputString) => {
    const map = new Array(26);

    if (inputString) {
      fillMap(map, inputString, 0, inputString.length - 1);
    }

    return map;
  };

  // check equality
  const areEqual = (map1, map2) => {
    for (let i = 0; i <= map1.length; i++) {
      if (map1[i] !== map2[i]) {
        return false;
      }
    }

    return true;
  };

  const windowLength = p.length;
  const pMap = createMap(p);
  // reuse map to save memory
  const sMap = createMap();

  let result = [];

  for (let i = 0; i <= s.length - windowLength; i++) {
    const left = i;
    const right = i + windowLength - 1;

    fillMap(sMap, s, left, right);

    if (areEqual(sMap, pMap)) {
      result.push(i);
    }
  }

  return result;
};

// tests
console.log(findAnagrams('cbaebabacd', 'abc')); // [0,6]
console.log(findAnagrams('abab', 'ab')); // [0,1,2]
