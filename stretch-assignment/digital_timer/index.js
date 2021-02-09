
let ms = 0;
let counterInterval;

function increaseTimer() {
  ms += 10;
  updateElements();
  if (ms >= 10000) {
    if (counterInterval) {
      stopTimer();
    }
  }
}

const button = document.querySelector('button');

function startTimer() {
  counterInterval = window.setInterval(increaseTimer, 10);
  button.disabled = true;
}

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const colon = document.querySelector('#colon');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

function updateElements() {
  msTens.textContent = Math.floor((ms % 100) / 10);
  msHundreds.textContent = Math.floor((ms % 1000) / 100);
  secondOnes.textContent = Math.floor((ms % 10000) / 1000);
  secondTens.textContent = Math.floor((ms % 100000) / 10000);
}

function stopTimer() {
  clearInterval(counterInterval);
  msTens.style.color = 'red';
  msHundreds.style.color = 'red';
  colon.style.color = 'red';
  secondOnes.style.color = 'red';
  secondTens.style.color = 'red';
}