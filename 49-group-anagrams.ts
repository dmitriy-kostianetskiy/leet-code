function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<BigInt, string[]>();

  const t = strs.forEach((s) => {
    const array = s.split('');
    array.sort();

    const hash = array.reduce((acc, val, index) => {
      acc += BigInt(val.charCodeAt(0) * Math.pow(1009, index));

      return acc;
    }, 0n);

    if (!groups.has(hash)) {
      groups.set(hash, []);
    }

    groups.get(hash)?.push(s);
  });

  const result: string[][] = [];
  for (let item of groups) {
    result.push(item[1]);
  }

  return result;
}

console.log(groupAnagrams(['ton', 'tap']));

[
  ['tho'],
  ['tin'],
  ['erg'],
  ['end'],
  ['pug'],
  ['ton', 'tap'],
  ['alb'],
  ['mes'],
  ['job'],
  ['ads'],
  ['soy'],
  ['toe'],
  ['sen'],
  ['ape'],
  ['led'],
  ['rig', 'rig'],
  ['con'],
  ['wac'],
  ['gog'],
  ['zen'],
  ['hay', 'hay'],
  ['lie'],
  ['pay'],
  ['kid'],
  ['oaf'],
  ['arc'],
  ['vet'],
  ['sat'],
  ['gap'],
  ['hop'],
  ['ben'],
  ['gem'],
  ['dem'],
  ['pie'],
  ['eco'],
  ['cub'],
  ['coy'],
  ['pep'],
  ['wot'],
  ['wee'],
];

[
  ['wee'],
  ['pep'],
  ['cub'],
  ['eco'],
  ['dem'],
  ['gap'],
  ['vet'],
  ['job'],
  ['ben'],
  ['toe'],
  ['hay', 'hay'],
  ['mes'],
  ['ads'],
  ['alb'],
  ['wot'],
  ['gem'],
  ['oaf'],
  ['hop'],
  ['ton'],
  ['pug'],
  ['end'],
  ['con'],
  ['coy'],
  ['sat'],
  ['soy'],
  ['pay'],
  ['tin'],
  ['pie'],
  ['ape'],
  ['tho'],
  ['erg'],
  ['sen'],
  ['rig', 'rig'],
  ['tap'],
  ['wac'],
  ['gog'],
  ['led'],
  ['zen'],
  ['arc'],
  ['lie'],
  ['kid'],
];
