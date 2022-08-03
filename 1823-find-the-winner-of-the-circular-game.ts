export class Node {
  next?: Node;

  constructor(readonly val: number) {}
}

function findTheWinner(n: number, k: number): number {
  const root = new Node(1);

  let current = root;

  for (let i = 2; i <= n; i++) {
    const node = new Node(i);

    current.next = node;

    current = node;
  }

  current.next = root;

  let previous = current;
  current = root;

  while (n > 1) {
    for (let i = 1; i < k; i++) {
      previous = current;
      current = current.next!;
    }

    previous.next = current.next;

    current = previous.next!;

    n--;
  }

  return current.val;
}

console.log(findTheWinner(5, 2), 3);
console.log(findTheWinner(3, 2), 3);
console.log(findTheWinner(6, 5), 1);
