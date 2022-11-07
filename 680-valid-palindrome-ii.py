class Solution:
    def validPalindrome(self, s: str, removed=False) -> bool:
        l = 0
        r = len(s) - 1

        while r >= l:
            if s[l] == s[r]:
                r -= 1
                l += 1
            elif removed:
                return False
            else:
                return self.validPalindrome(s[l:r], True) or self.validPalindrome(s[l+1:r+1], True)

        return True


s = Solution()
print(s.validPalindrome("abca"))
print(s.validPalindrome("abcva"))
print(s.validPalindrome("abccba"))
print(s.validPalindrome("abcba"))
print(s.validPalindrome("ebcbbececabbacecbbcbe"))
