type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const cache = new Map<string, any>();

  const hash = (args: any[]): any => {
    return args.join();
  };

  return function (...args) {
    const key = hash(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
}
