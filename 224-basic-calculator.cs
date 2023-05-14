public class Solution
{
  public int Calculate(string s)
  {
    var sign = +1;
    var result = 0;
    var stack = new Stack<int>();

    for (var i = 0; i < s.Length; i++)
    {
      var c = s[i];

      if (char.IsDigit(c))
      {
        var num = 0;
        while (i < s.Length && char.IsDigit(s[i]))
        {
          num = num * 10 + (s[i] - '0');
          i++;
        }

        i--;
        result += num * sign;
        sign = +1;
      }
      else if (c == '-')
      {
        sign = -1;
      }
      else if (c == '+')
      {
        sign = +1;
      }
      else if (c == '(')
      {
        stack.Push(result);
        stack.Push(sign);

        result = 0;
        sign = 1;
      }
      else if (c == ')')
      {
        var sign1 = stack.Pop();
        var num = stack.Pop();
        result = num + sign1 * result;
      }
    }

    return result;
  }
}
