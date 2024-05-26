namespace Problem202 {
  function getDigits(n: number): number[] {
    const result: number[] = [];

    while (n > 0) {
      const digit = n % 10;

      result.push(digit);

      n = Math.floor(n / 10);
    }

    return result;
  }

  function isHappy(n: number): boolean {
    var d = new Set<number>();

    while (n !== 1) {
      d.add(n);

      const digits = getDigits(n);

      n = digits.map((x) => x * x).reduce((acc, val) => acc + val, 0);

      if (d.has(n)) {
        return false;
      }
    }

    return true;
  }

  isHappy(19);
}

/*
public class Solution {
    public bool IsHappy(int n) {
        var d = new HashSet<int>();

        while (n != 1) {
            d.Add(n);

            var digits = GetDigits(n);
            n = digits.Select(x => x * x).Sum();

            if (d.Contains(n)) {
                return false;
            }
        }

        return true;
    }

    private IEnumerable<int> GetDigits(int n) {
        while (n > 0) {
            int digit = n % 10;

            yield return digit;

            n = n / 10;
        }
    }
}*/
