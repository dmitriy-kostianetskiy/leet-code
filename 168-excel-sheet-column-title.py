class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        res = ''
        while columnNumber != 0:
            mod = columnNumber % 26
            columnNumber = columnNumber // 26

            if mod == 0:
                columnNumber -= 1
                res = 'Z' + res
            else:
                res = chr(ord('A') + mod - 1) + res

        return res


s = Solution()
print(s.convertToTitle(1), 'A')
print(s.convertToTitle(2), 'B')
print(s.convertToTitle(3), 'C')
print(s.convertToTitle(26), 'Z')
print(s.convertToTitle(27), 'AA')
print(s.convertToTitle(28), 'AB')
print(s.convertToTitle(701), 'ZY')
