namespace Problem22 {
  function generateParenthesis(n: number): string[] {
    const answers: string[][] = [['']];

    for (let i = 1; i <= n; i++) {
      const result = new Set<string>();

      for (let j = i - 1; j >= 0; j--) {
        const left = i - j;

        answers[j].forEach((answer1) => {
          if (left === 1) {
            result.add(`(${answer1})`);
          }

          if (left < answers.length) {
            answers[left].forEach((answer2) => {
              result.add(answer1 + answer2);
              result.add(answer2 + answer1);
            });
          }
        });
      }

      answers[i] = Array.from(result);
    }

    return answers[n];
  }

  console.log(JSON.stringify(generateParenthesis(3)));
  console.log(JSON.stringify(generateParenthesis(4)));
}
