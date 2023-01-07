public class Solution
{
  public IList<string> FizzBuzz(int n)
  {
    var result = new List<string>();

    return Enumerable.Range(1, n).Select(i =>
    {
      if (i % 3 == 0 && i % 5 == 0)
      {
        return "FizzBuzz";
      }
      else if (i % 3 == 0)
      {
        return "Fizz";
      }
      else if (i % 5 == 0)
      {
        return "Buzz";
      }
      else
      {
        return i.ToString();
      }
    }).ToList();
  }
}

