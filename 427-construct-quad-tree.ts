namespace Problem427 {
  class _Node {
    val: boolean;
    isLeaf: boolean;
    topLeft: _Node | null;
    topRight: _Node | null;
    bottomLeft: _Node | null;
    bottomRight: _Node | null;
    constructor(
      val?: boolean,
      isLeaf?: boolean,
      topLeft?: _Node,
      topRight?: _Node,
      bottomLeft?: _Node,
      bottomRight?: _Node,
    ) {
      this.val = val === undefined ? false : val;
      this.isLeaf = isLeaf === undefined ? false : isLeaf;
      this.topLeft = topLeft === undefined ? null : topLeft;
      this.topRight = topRight === undefined ? null : topRight;
      this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
      this.bottomRight = bottomRight === undefined ? null : bottomRight;
    }
  }

  function construct(grid: number[][]): _Node | null {
    const n = grid.length;

    function build(size: number, left: number, top: number): _Node {
      if (size === 1) {
        const val = grid[top][left] === 1;

        return new _Node(val, true);
      }

      const newSize = Math.floor(size / 2);

      const topLeft = build(newSize, left, top);
      const topRight = build(newSize, left + newSize, top);
      const bottomLeft = build(newSize, left, top + newSize);
      const bottomRight = build(newSize, left + newSize, top + newSize);

      const areAllLeafs = [topLeft, topRight, bottomLeft, bottomRight].every(
        ({ isLeaf, val }) => isLeaf && val === topLeft.val,
      );

      if (areAllLeafs) {
        return new _Node(topLeft.val, true);
      }

      return new _Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    }

    const result = build(n, 0, 0);

    return result;
  }

  construct([
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
  ]);

  // construct([
  //   [1, 1, 1, 1, 0, 0, 0, 0],
  //   [1, 1, 1, 1, 0, 0, 0, 0],
  //   [1, 1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 1, 1, 1, 1],
  //   [1, 1, 1, 1, 0, 0, 0, 0],
  //   [1, 1, 1, 1, 0, 0, 0, 0],
  //   [1, 1, 1, 1, 0, 0, 0, 0],
  //   [1, 1, 1, 1, 0, 0, 0, 0],
  // ]);
}
