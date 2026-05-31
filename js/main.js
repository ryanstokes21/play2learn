import showTestimonial from './quotes.js';
import { selectOperation, createMathProblem } from './math-facts.js';

const gameBtn = document.getElementById('game-btn');
const mathFactsStartMenu = document.getElementById('math-facts-start-menu');
const mathFactsGameBoard = document.getElementById('math-facts-game-board');
const operationSelect = document.getElementById('operation');

if (gameBtn) {
  gameBtn.addEventListener('click', () => {
    mathFactsStartMenu.classList.toggle('hidden');
    mathFactsGameBoard.classList.toggle('hidden');
    selectOperation(operationSelect);
    const { problem } = createMathProblem(operationSelect.value);

    document.getElementById('problem').textContent = problem;
  });
}

showTestimonial();
setInterval(showTestimonial, 10000);
