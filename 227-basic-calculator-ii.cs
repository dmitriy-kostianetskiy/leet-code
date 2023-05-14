public class Solution
{
  public int Calculate(string s)
  {
    var operands = new Stack<int>();
    var operators = new Stack<char>();

    for (var i = 0; i < s.Length; i++)
    {
      var c = s[i];

      if (char.IsDigit(c))
      {
        var num = 0;

        while (i < s.Length && char.IsDigit(s[i]))
        {
          num = num * 10 + s[i] - '0';
          i++;
        }

        operands.Push(num);

        i--;
        continue;
      }

      if (c == '+' || c == '-' || c == '/' || c == '*')
      {
        while (operators.Count > 0 && GetPriority(operators.Peek()) >= GetPriority(c))
        {
          IterateStack(operands, operators);
        }

        operators.Push(c);
      }
    }

    while (operators.Count > 0)
    {
      IterateStack(operands, operators);
    }

    return operands.Peek();
  }

  private void IterateStack(Stack<int> operands, Stack<char> operators)
  {
    var op = operators.Pop();
    var right = operands.Pop();
    var left = operands.Pop();
    var result = Evaluate(op, left, right);

    Console.WriteLine("{0}, {1}, {2} = {3}", op, left, right, result);


    operands.Push(result);
  }

  private int Evaluate(char op, int left, int right)
  {
    switch (op)
    {
      case '*': return left * right;
      case '/': return left / right;
      case '+': return left + right;
      case '-': return left - right;
      default: return 0;
    }
  }

  private int GetPriority(char op)
  {
    switch (op)
    {
      case '+':
        return 1;
      case '-':
        return 2;
      case '/':
      case '*':
        return 3;
      default:
        return -1;
    }
  }
}
