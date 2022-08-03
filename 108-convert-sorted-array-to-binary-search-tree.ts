export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const buildTree = (l: number, r: number): TreeNode | null => {
    if (l > r) {
      return null;
    }

    const mid = Math.floor(l + (r - l) / 2);

    return new TreeNode(nums[mid], buildTree(l, mid - 1), buildTree(mid + 1, r));
  };

  return buildTree(0, nums.length - 1);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
// [-9,-5,-4,-3,-2,0,5,9,10]

//         -2
//     -4     5
//   -5  -3  0  9
//  -9

// [-10,-3,0,5,9]

//      0
//  -3     9
// -10
