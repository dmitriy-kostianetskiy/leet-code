class Solution:
    def isPalindrome(self, s: str) -> bool:
        chars = [char.lower() for char in list(s) if char.isalnum()]
        l = 0
        r = len(chars) - 1

        while r >= l and chars[l] == chars[r]:
            r -= 1
            l += 1

        return l > r


s = Solution()
print(s.isPalindrome("A man, a plan, a canal: Panama"))
print(s.isPalindrome("race a car"))
print(s.isPalindrome("abccba"))
print(s.isPalindrome("abcba"))
print(s.isPalindrome("a"))
print(s.isPalindrome("0P"))
print(s.isPalindrome("    a    "))
