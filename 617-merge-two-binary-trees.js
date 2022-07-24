var mergeTrees = function (root1, root2) {
  const merge = (node1, node2) => {
    if (!node1) {
      return node2;
    }

    if (!node2) {
      return node1;
    }

    node1.val += node2.val;

    node1.left = merge(node1.left, node2.left);
    node1.right = merge(node1.right, node2.right);

    return node1;
  };

  return merge(root1, root2);
};
