from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def dfs(self, root: Optional[TreeNode]):
        if (root.left is None and root.right is None):
            return 1

        l = 1e9 if root.left is None else self.dfs(root.left)
        r = 1e9 if root.right is None else self.dfs(root.right)

        return min(l, r) + 1

    def minDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        return self.dfs(root)


s = Solution()

print(s.minDepth(TreeNode(0, None, TreeNode(2, TreeNode(3, TreeNode(4))))))
