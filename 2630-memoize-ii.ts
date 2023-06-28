type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  type Cache = {
    value?: any;
    args: Map<any, Cache>;
  };

  const cache: Cache = {
    args: new Map(),
  };

  const find = (args: any[]): Cache => {
    let localCache = cache;

    while (args.length > 0) {
      const [firstArg] = args;

      if (!localCache.args.has(firstArg)) {
        localCache.args.set(firstArg, { args: new Map() });
      }

      args = args.slice(1);
      localCache = localCache.args.get(firstArg)!;
    }

    return localCache;
  };

  return function (...args) {
    const cacheItem = find(args);

    if (!('value' in cacheItem)) {
      const val = fn(...args);

      cacheItem.value = val;
    }

    return cacheItem.value;
  };
}

let callCount = 0;
const memoizedFn = memoize(function () {
  callCount++;
  return true;
});

const array = new Array(10000).fill(0);

memoizedFn(...array); // 5
memoizedFn(...array); // 5
console.log(callCount); // 1
