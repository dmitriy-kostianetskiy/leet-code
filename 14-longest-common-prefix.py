class Solution:
    def check(self, strs: List[str], target_len) -> bool:
        prefix = strs[0][:target_len]

        for s in strs:
            if s.find(prefix) != 0:
                return False

        return True


    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""

        min_len = len(min(strs, key=len))

        l = 0
        r = min_len

        while r >= l:
            m = l + (r - l) // 2

            if self.check(strs, m):
                l = m + 1
            else:
                r = m - 1

        return strs[0][:l + (r - l) // 2]
