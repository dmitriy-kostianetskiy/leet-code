class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        sum = 0
        for i in range(len(columnTitle)-1, -1, -1):
            c = columnTitle[i]
            num = ord(c) - ord('A') + 1
            p = len(columnTitle) - i - 1
            sum = sum + num * 26 ** p
        return sum


s = Solution()
print(s.titleToNumber('A'), 1)
print(s.titleToNumber('Z'), 26)
print(s.titleToNumber('AA'), 27)
print(s.titleToNumber('AB'), 28)
print(s.titleToNumber('ZY'), 701)
