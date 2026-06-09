import showTestimonial from './quotes.js';
import { startGame, playGame } from './math-facts.js';

const gameBtn = document.getElementById('game-btn');
const mathFactsStartMenu = document.getElementById('math-facts-start-menu');
const mathFactsGameBoard = document.getElementById('math-facts-game-board');
const quoteEl = document.getElementById('quote-el');

if (gameBtn) {
  gameBtn.addEventListener('click', () => {
    mathFactsStartMenu.classList.toggle('hidden');
    mathFactsGameBoard.classList.toggle('hidden');
    startGame();
  });
}

if (mathFactsGameBoard) {
  playGame();
}

if (quoteEl) {
  showTestimonial();
  setInterval(showTestimonial, 10000);
}
