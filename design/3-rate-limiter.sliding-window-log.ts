namespace RateLimiter {
  const RATE_LIMIT = 2;
  const WINDOW_SIZE = 1_000; // ms

  const users = [
    "John",
    "Hannah",
    "Lucy"
  ] as const;

  type UserId = typeof users[number];

  const buckets = new Map<string, Set<number>>();

  const start = Date.now();

  function timestamp() {
    return Date.now() - start;
  }

  let windowStart = timestamp();

  function init() {
    windowStart = timestamp();

    users.forEach((user) => {
      buckets.set(user, new Set());
    })

    const intervalHandle = setInterval(() => {
      windowStart = timestamp();
      console.log(`[${windowStart}] New window started at ${windowStart}`);
    }, WINDOW_SIZE);

    return () => {
      clearInterval(intervalHandle);
    }
  }

  function request(user: UserId) {
    const requestTimestamps = buckets.get(user)!;

    requestTimestamps.forEach(requestTimestamp => {
      if (requestTimestamp < windowStart) {
        requestTimestamps.delete(requestTimestamp);

        console.log(`[${timestamp()}] Timestamp ${requestTimestamp} dropped for user: ${user}`);
      }
    });

    const current = timestamp();

    requestTimestamps.add(current);

    console.log(`[${timestamp()}] Timestamp ${current} add for user: ${user}`);

    if (requestTimestamps.size > RATE_LIMIT) {
      console.error(`[${timestamp()}] Request dropped. User: ${user}, has ${requestTimestamps.size} timestamp(s).`);
      return;
    }

    console.log(`[${timestamp()}] Request passed. User: ${user}, has ${requestTimestamps.size} timestamp(s).`);
  }

  function bootstrap() {
    const close = init();

    request("John");
    request("John");

    request("Hannah");
    request("Hannah");

    setTimeout(() => {
      request("John");

      request("Lucy");
    }, 2300);

    setTimeout(() => {
      request("John");

      request("Lucy");
    }, 2400);

    setTimeout(() => {
      request("John");
      request("Lucy");
    }, 2500);

    setTimeout(() => {
      close();
    }, 10000);
  }

  bootstrap();
}
