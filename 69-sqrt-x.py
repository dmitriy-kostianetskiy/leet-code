# linear search
# class Solution:
#     def mySqrt(self, x: int) -> int:
#         for i in range(x+1):
#             if (i*i == x):
#                 return i
#             if (i*i > x):
#                 return i - 1

# binary search
class Solution:
    def mySqrt(self, x: int) -> int:
        l = 1
        r = x
        ans = 0

        while r >= l:
            m = l + (r - l) // 2
            s = m*m

            if (s <= x):
                l = m + 1
                ans = m
            else:
                r = m - 1

        return ans


s = Solution()

print(s.mySqrt(10))
print(s.mySqrt(8))
print(s.mySqrt(4))
print(s.mySqrt(25))
print(s.mySqrt(1))
print(s.mySqrt(0))
print(s.mySqrt(2))
print(s.mySqrt(3))
print(s.mySqrt(4))
print(s.mySqrt(5))
print(s.mySqrt(6))
print(s.mySqrt(7))
