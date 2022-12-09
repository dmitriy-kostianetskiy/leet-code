public class LRUCache {
    private int _capacity;
    private LinkedList<(int, int)> _list = new LinkedList<(int,int)>();
    private Dictionary<int, LinkedListNode<(int,int)>> _map = new Dictionary<int, LinkedListNode<(int,int)>>();

    public LRUCache(int capacity) {
        _capacity = capacity;
    }
    
    public int Get(int key) {
        if (!_map.TryGetValue(key, out var node)) {
            return -1;
        }

        var pair = node.Value;
        _list.Remove(node);
        var newNode = _list.AddLast(pair);
        _map[key] = newNode;

        return pair.Item2;
    }
    
    public void Put(int key, int value) {
        if (_map.TryGetValue(key, out var node)) {
            _list.Remove(node);
        }

        if (_list.Count == _capacity) {
            var pair = _list.First.Value;
            _list.RemoveFirst();
            _map.Remove(pair.Item1);
        }

        var newNode = _list.AddLast((key, value));
        _map[key] = newNode;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */
