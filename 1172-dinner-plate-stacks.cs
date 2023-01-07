public class DinnerPlates
{
  private int _capacity;
  private SortedSet<int> _pushingSet = new SortedSet<int>();
  private SortedSet<int> _poppingSet = new SortedSet<int>();
  private List<Stack<int>> _stacks = new List<Stack<int>>();

  public DinnerPlates(int capacity)
  {
    _capacity = capacity;
  }

  public void Push(int val)
  {
    var index = _pushingSet.Count == 0 ? _stacks.Count : _pushingSet.Min;

    var stack = GetOrCreateStackByIndex(index);

    stack.Push(val);

    if (stack.Count == _capacity)
    {
      _pushingSet.Remove(index);
    }
    else
    {
      _pushingSet.Add(index);
    }

    _poppingSet.Add(index);
  }

  public int Pop()
  {
    if (_poppingSet.Count == 0)
    {
      return -1;
    }

    var index = _poppingSet.Max;

    return PopAtStack(index);
  }

  public int PopAtStack(int index)
  {
    if (index >= _stacks.Count)
    {
      return -1;
    }

    var stack = _stacks[index];

    if (!stack.TryPop(out int value))
    {
      return -1;
    }

    if (stack.Count == 0)
    {
      _poppingSet.Remove(index);
    }

    _pushingSet.Add(index);

    return value;
  }

  private Stack<int> GetOrCreateStackByIndex(int index)
  {
    var count = _stacks.Count;

    if (index < count)
    {
      return _stacks[index];
    }

    _stacks.AddRange(Enumerable.Range(0, index - count + 1).Select(x => new Stack<int>()));

    return _stacks[index];
  }
}
