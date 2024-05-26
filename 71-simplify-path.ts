namespace Problem71 {
  function simplifyPath(path: string): string {
    const pathSegments = path.split('/').filter((segment) => !!segment);

    const stack: string[] = [];

    for (let segment of pathSegments) {
      if (segment === '.') {
        continue;
      }

      if (segment === '..') {
        stack.pop();
        continue;
      }

      stack.push(segment);
    }

    return `/${stack.join('/')}`;
  }

  console.log(simplifyPath('/dir1/.././/dir2/dir3//'));
  console.log(simplifyPath('/dir1/..'));
}
