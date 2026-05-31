export function selectOperation(operation) {
  const selectedOperation = document.getElementById('selected-operation');
  selectedOperation.textContent = operation.value;
}

function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createMathProblem(operation) {
  let num1 = createRandomNumber(0, 9);
  let num2 = createRandomNumber(0, 9);

  if (operation === 'Division') {
    num2 = createRandomNumber(1, 9);
    num1 = num2 * createRandomNumber(1, 9);
  }

  let answer;
  let operator;

  switch (operation) {
    case 'Addition':
      operator = '+';
      answer = num1 + num2;
      break;
    case 'Subtraction':
      operator = '-';
      answer = num1 - num2;
      break;
    case 'Multiplication':
      operator = '*';
      answer = num1 * num2;
      break;
    case 'Division':
      operator = '÷';
      answer = num1 / num2;
      break;
  }

  return {
    problem: `${num1} ${operator} ${num2}`,
    answer: answer,
  };
}
