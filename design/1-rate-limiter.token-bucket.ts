namespace RateLimiter {
  const BUCKET_SIZE = 2;
  const REFILL_RATE = 1_000;

  const users = [
    "John",
    "Hannah",
    "Lucy"
  ] as const;

  type UserId = typeof users[number];

  const buckets = new Map<string, number>();

  const start = Date.now();

  function timestamp() {
    return Date.now() - start;
  }

  function refill(user: UserId) {
    buckets.set(user, 0);

    console.log(`[${timestamp()}] Refill bucket for user: ${user}.`);
  }

  function refillAll() {
    users.forEach((user) => {
      refill(user);
    })
  }

  function request(user: UserId) {
    const tokens = buckets.get(user)! + 1;

    if (tokens > BUCKET_SIZE) {
      console.error(`[${timestamp()}] Request dropped. User: ${user}, has ${tokens} token(s).`);
      return;
    }

    buckets.set(user, tokens);

    console.log(`[${timestamp()}] Request passed. User: ${user}, has ${tokens} token(s).`);
  }

  function bootstrap() {
    refillAll();

    const intervalHandle = setInterval(refillAll, REFILL_RATE);

    request("John");
    request("John");

    request("Hannah");
    request("Hannah");

    setTimeout(() => {
      request("John");
      request("John");

      request("Lucy");
      request("Lucy");
    }, 2300);

    setTimeout(() => {
      request("John");
      request("Lucy");
    }, 2500);

    setTimeout(() => {
      clearInterval(intervalHandle);
    }, 10000);

  }

  bootstrap();
}
