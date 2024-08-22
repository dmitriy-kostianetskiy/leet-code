namespace Problem1472 {
  type LinkedListNode<T> = {
    value: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
  };

  class BrowserHistory {
    private current: LinkedListNode<string>;

    constructor(homepage: string) {
      this.current = {
        value: homepage,
        prev: null,
        next: null,
      };
    }

    visit(url: string): void {
      const node = {
        value: url,
        prev: this.current,
        next: null,
      };

      this.current.next = node;
      this.current = node;
    }

    back(steps: number): string {
      while (steps > 0) {
        if (!this.current.prev) {
          break;
        }

        this.current = this.current.prev;
        steps--;
      }

      return this.current.value;
    }

    forward(steps: number): string {
      while (steps > 0) {
        if (!this.current.next) {
          break;
        }

        this.current = this.current.next;
        steps--;
      }

      return this.current.value;
    }
  }
}
