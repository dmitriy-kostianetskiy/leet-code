	public class Solution {
    	public string RemoveKdigits(string num, int k) {
			var stack = new Stack<char>();

			foreach (var c in num) {
				while (k > 0 && stack.TryPeek(out char top) && top > c) {
					stack.Pop();
					k--;
				}
				
				stack.Push(c);
				
				if (c == '0' && stack.Count == 1) {
					stack.Pop();
				}
			}
			
			while (k > 0 && stack.Count != 0) {
				stack.Pop();
				k--;
			}
			
			var stringBuilder = new StringBuilder();
			
			if (stack.Count == 0) {
				return "0";
			}
			
			while (stack.TryPop(out char top)) {
				stringBuilder.Insert(0, top);
			}
		
			return stringBuilder.ToString();
		}
	}
