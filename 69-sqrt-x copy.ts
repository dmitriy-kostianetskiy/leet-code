namespace Problem69 {
  function mySqrt(x: number): number {
    let l = 1;
    let r = x;
    let answer = 0;

    while (r >= l) {
      const m = l + Math.floor((r - l) / 2);

      if (m * m <= x) {
        l = m + 1;
        answer = m;
      } else {
        r = m - 1;
      }
    }

    return answer;
  }
}
// # binary search
// class Solution:
//     def mySqrt(self, x: int) -> int:
//         l = 1
//         r = x
//         ans = 0

//         while r >= l:
//             m = l + (r - l) // 2
//             s = m*m

//             if (s <= x):
//                 l = m + 1
//                 ans = m
//             else:
//                 r = m - 1

//         return ans
