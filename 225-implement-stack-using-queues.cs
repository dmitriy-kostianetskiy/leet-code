public class MyStack
{
  private Queue<int> _q1 = new Queue<int>();
  private Queue<int> _q2 = new Queue<int>();

  public MyStack()
  {

  }

  public void Push(int x)
  {
    _q1.Enqueue(x);
  }

  public int Pop()
  {
    TransferItems();

    var result = _q1.Dequeue();

    SwapQueues();

    return result;
  }

  public int Top()
  {
    TransferItems();

    var result = _q1.Dequeue();
    _q2.Enqueue(result);

    SwapQueues();

    return result;

  }

  public bool Empty()
  {
    return _q1.Count == 0;
  }

  private void TransferItems()
  {
    while (_q1.Count > 1)
    {
      _q2.Enqueue(_q1.Dequeue());
    }
  }

  private void SwapQueues()
  {
    var tmp = _q1;
    _q1 = _q2;
    _q2 = tmp;
  }
}
