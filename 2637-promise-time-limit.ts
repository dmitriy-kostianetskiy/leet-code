namespace Problem2637 {
  type Fn = (...params: any[]) => Promise<any>;

  function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args) {
      return new Promise(async (resolve, reject) => {
        let rejected = false;

        const timeoutHandle = setTimeout(() => {
          rejected = true;

          reject('Time Limit Exceeded');
        }, t);

        try {
          const result = await fn(...args);

          if (!rejected) {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        } finally {
          clearTimeout(timeoutHandle);
        }
      })
    }
  };

  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
  limited(150).then(console.log).catch(console.error); // "Time Limit Exceeded" at t=100ms
  limited(50).then(console.log).catch(console.error); // "Time Limit Exceeded" at t=100ms
}
