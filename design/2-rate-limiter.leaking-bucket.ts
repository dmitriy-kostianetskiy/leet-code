import { EventEmitter } from 'node:events';
import { randomUUID } from 'node:crypto';

namespace RateLimiter {
  const BUCKET_SIZE = 2;
  const REFILL_RATE = 1_000;

  const users = [
    "John",
    "Hannah",
    "Lucy"
  ] as const;

  type UserId = typeof users[number];

  type Job = {
    requestId: string;
    user: UserId;
  }

  class Queue extends EventEmitter {
    constructor(delay = 100) {
      super();

      this.on('enqueued', (job) => {
        setTimeout(() => {
          this.emit('finished', job);
        }, delay);
      });
    }

    enqueue(job: Job) {
      this.emit('enqueued', job);
    }
  }

  const buckets = new Map<string, number>();
  const queue = new Queue();

  const start = Date.now();

  function timestamp() {
    return Date.now() - start;
  }

  function refill(user: UserId) {
    buckets.set(user, BUCKET_SIZE);

    console.log(`[${timestamp()}] Refill bucket for user: ${user}, now has ${BUCKET_SIZE} token(s)`);
  }

  function refillAll() {
    users.forEach((user) => {
      refill(user);
    })
  }

  function request(user: UserId) {
    const tokens = buckets.get(user)!;

    if (tokens === 0) {
      console.error(`[${timestamp()}] Request dropped. User: ${user}, has ${tokens} token(s).`);
      return;
    }

    buckets.set(user, tokens - 1);

    const job = {
      user,
      requestId: randomUUID()
    };

    queue.enqueue(job);

    const handler = (job) => {
      console.log(`[${timestamp()}] Request ${job.requestId} finished. User: ${job.user}`);

      queue.off('finished', handler);
    };

    queue.on('finished', handler);

    console.log(`[${timestamp()}] Request ${job.requestId} placed to the queue. User: ${user}, has ${tokens} token(s).`);
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
