const selectedOperation = document.getElementById('selected-operation');
const operationOptions = document.getElementById('operation');
const mathProblem = document.getElementById('problem');
const timerEl = document.getElementById('timer');
const keypad = document.getElementById('keypad');
const answerInput = document.getElementById('answer-input');
const gameBoard = document.getElementById('game-board');
const scoreEl = document.getElementById('score');
const endScreen = document.getElementById('endScreen');

let interval;
let currentProblem = null;
let currentAnswer = null;
let score = 0;
let seconds = 30;
let gameOver = false;

export function startGame() {
  gameOver = false;
  seconds = 30;
  score = 0;
  scoreEl.textContent = 'Score: 0';
  timerEl.textContent = 'Time Left: 30 seconds';
  answerInput.value = '';
  clearInterval(interval);
  if (endScreen) {
    endScreen.classList.add('hidden');
    gameBoard.classList.remove('hidden');
  }
  renderMathOperator();
  currentProblem = generateMathProblem();
  renderMathProblem(currentProblem);
  currentAnswer = currentProblem.answer;
  startTimer();
}

export function playGame() {
  keypad.addEventListener('click', clickHandler);
  document.addEventListener('keydown', keyDownHandler);
}

function clickHandler(e) {
  if (gameOver) return;
  const key = e.target.closest('.key');
  if (!key) return;
  handleInput(key.dataset.value);
}

function keyDownHandler(e) {
  console.log('key pressed:', e.key);
  if (gameOver) return;
  if (e.key >= '0' && e.key <= '9') {
    handleInput(e.key);
  }
  if (e.key === 'Backspace') {
    answerInput.value = answerInput.value.slice(0, -1);
  }
}

function handleInput(value) {
  if (value === 'clear') {
    answerInput.value = '';
    return;
  }
  answerInput.value += value;
  if (Number(answerInput.value) === currentAnswer) {
    answerInput.value = '';
    score++;
    scoreEl.textContent = `Score: ${score}`;
    currentProblem = generateMathProblem();
    renderMathProblem(currentProblem);
    currentAnswer = currentProblem.answer;
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateMathProblem() {
  let num1 = generateRandomNumber(0, 10);
  let num2 = generateRandomNumber(0, 10);
  if (operationOptions.value === 'Subtraction') {
    num1 = generateRandomNumber(0, 10);
    num2 = generateRandomNumber(0, num1);
  }
  if (operationOptions.value === 'Division') {
    num2 = generateRandomNumber(1, 10);
    num1 = num2 * generateRandomNumber(1, 10);
  }
  let operator;
  let answer;

  switch (operationOptions.value) {
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

  const question = `${num1} ${operator} ${num2}`;

  return {
    question,
    answer,
  };
}

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    seconds--;
    timerEl.textContent = `Time Left: ${seconds} seconds`;

    if (seconds <= 0) {
      clearInterval(interval);
      gameOver = true;
      endGame();
    }
  }, 1000);
}

function renderMathOperator() {
  selectedOperation.textContent = operationOptions.value;
}

function renderMathProblem(problem) {
  mathProblem.textContent = problem.question;
}

function endGame() {
  endScreen.replaceChildren();
  clearInterval(interval);

  gameBoard.classList.add('hidden');
  endScreen.classList.remove('hidden');

  timerEl.textContent = 'Times up!';
  const finalScoreText = document.createElement('p');
  finalScoreText.textContent = 'Your final score is:';
  const finalScore = document.createElement('p');
  finalScore.textContent = score;
  const playAgainBtn = document.createElement('button');
  playAgainBtn.classList.add('btn');
  playAgainBtn.textContent = 'Play Again';
  endScreen.append(timerEl, finalScoreText, finalScore, playAgainBtn);

  playAgainBtn.addEventListener('click', startGame);
}
