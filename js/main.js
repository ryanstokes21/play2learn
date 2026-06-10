import showTestimonial from './quotes.js';
import { startGame, playGame } from './math-facts.js';

const gameBtn = document.getElementById('game-btn');
const mathFactsStartMenu = document.getElementById('math-facts-start-menu');
const mathFactsGameBoard = document.getElementById('math-facts-game-board');
const quoteEl = document.getElementById('quote-el');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

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

if (registerLink) {
  registerLink.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
  });
}

if (loginLink) {
  loginLink.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });
}
