function canVisitAllRooms(rooms: number[][]): boolean {
  const visited: boolean[] = [];
  const stack: number[] = [];
  stack.push(0);

  while (stack.length > 0) {
    const q = stack.pop()!;

    if (visited[q]) {
      continue;
    }

    visited[q] = true;

    stack.push(...rooms[q]);
  }

  for (let i = 0; i < rooms.length; i++) {
    if (!visited[i]) {
      return false;
    }
  }

  return true;
}

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
