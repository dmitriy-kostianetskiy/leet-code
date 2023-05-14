type F = (x: number) => number;

function compose(functions: F[]): F {
  return functions.reduceRight<F>(
    (acc, func) => {
      return (x) => func(acc(x));
    },
    (x) => x,
  );
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
