namespace Problem150 {
  function evaluate(operand1: number, operand2: number, operation: string): number {
    switch (operation) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return Math.trunc(operand1 / operand2);
      default:
        throw Error(`Unsupported operation: ${operation}`);
    }
  }

  function evalRPN(tokens: string[]): number {
    const stack: (string | number)[] = [];

    for (const token of tokens) {
      if ('+-*/'.includes(token)) {
        const operand2 = +stack.pop()!;
        const operand1 = +stack.pop()!;

        const result = evaluate(operand1, operand2, token);

        stack.push(result);
        continue;
      }

      stack.push(token);
    }

    return +stack.pop()!;
  }

  // console.log(evalRPN(['2', '1', '+', '3', '*']));
  console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
}
