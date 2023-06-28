function curry(fn: Function): Function {
  return function curried(this: any, ...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    }
  };
}

function sum(a, b) {
  return a + b;
}

const csum = curry(sum);
console.log(csum(1, 2)); // 3
console.log(csum(1)(2)); // 3
