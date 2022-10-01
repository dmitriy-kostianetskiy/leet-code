class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        c = 0
        for i in range(len(s)):
            index = len(s) - i - 1
            if s[index] == ' ':
                if c != 0:
                    return c
            else:
                c += 1
        return c
