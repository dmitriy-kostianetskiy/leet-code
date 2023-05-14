function cancellable<T>(generator: Generator<Promise<any>, T, unknown>): [() => void, Promise<T>] {
  let cancel: (reason?: any) => void;

  const cancelPromise = new Promise((_, reject) => {
    cancel = reject;
  });

  return [
    () => cancel('Cancelled'),
    new Promise<T>(async (resolve, reject) => {
      let isError = false;
      let result: any;

      const handlePromise = async (promise: Promise<any> | any) => {
        try {
          return [await Promise.race([promise, cancelPromise]), false];
        } catch (error) {
          return [error, true];
        }
      };

      while (true) {
        try {
          const { value, done } = isError ? generator.throw(result) : generator.next(result);

          [result, isError] = await handlePromise(value);

          if (done) {
            break;
          }
        } catch (error) {
          result = error;
          isError = true;
          break;
        }
      }

      if (isError) {
        reject(result);
      } else {
        resolve(result);
      }
    }),
  ];
}

//
const generatorFunction = function* () {
  yield new Promise((res) => setTimeout(res, 200));
  return 'Success';
};
const generator = generatorFunction();
const [cancel, promise] = cancellable(generator);
setTimeout(cancel, 100);
promise.then(console.log).catch(console.log);

// Example 1
// const generatorFunction = function* () {
//   return 42;
// };
// const generator = generatorFunction();
// const [cancel, promise] = cancellable(generator);
// setTimeout(cancel, 100);
// promise.then(console.log);

// Example 2
// function* tasks() {
//   const val: any = yield new Promise((resolve) => resolve(2 + 2));
//   yield new Promise((resolve) => setTimeout(resolve, 100));
//   return val + 1;
// }
// const [cancel, promise] = cancellable(tasks());
// setTimeout(cancel, 50);
// promise.then(console.log).catch(console.log);

// Example 3
// const generatorFunction = function* () {
//   const msg = yield new Promise((res) => res('Hello'));
//   throw `Error: ${msg}`;
// };
// const generator = generatorFunction();
// const [cancel, promise] = cancellable(generator);
// promise.then(console.log).catch(console.log);

// // Example 4
// const generatorFunction = function* () {
//   let result = 0;
//   try {
//     yield new Promise((res) => setTimeout(res, 100));
//     result += yield new Promise((res) => res(1));
//     yield new Promise((res) => setTimeout(res, 100));
//     result += yield new Promise((res) => res(1));
//   } catch (e) {
//     return result;
//   }
//   return result;
// };
// const generator = generatorFunction();
// const [cancel, promise] = cancellable(generator);
// setTimeout(cancel, 150);
// promise.then(console.log).catch(console.log);

// Example 5
// const generatorFunction = function* () {
//   try {
//     yield new Promise((resolve, reject) => reject('Promise Rejected'));
//   } catch (e) {
//     let a = yield new Promise((resolve) => resolve(2));
//     let b = yield new Promise((resolve) => resolve(2));
//     return a + b;
//   }
// };
// const generator = generatorFunction();
// const [cancel, promise] = cancellable(generator);
// // setTimeout(cancel, 150);
// promise.then(console.log).catch(console.log);
