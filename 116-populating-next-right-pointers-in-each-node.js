/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }
  const q = [root];

  let c = q.length;

  while (q.length > 0) {
    const top = q.shift();

    c--;

    if (top.left) {
      q.push(top.left);
    }

    if (top.right) {
      q.push(top.right);
    }

    if (c === 0) {
      top.next = null;
      c = q.length;
    } else {
      top.next = q[0];
    }
  }

  return root;
};
