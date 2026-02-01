let score = 0;
let time = 10;
let timer;
let gameActive = false;
let highRick = 0;

const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const clickBtn = document.getElementById('clickBtn');
const startBtn = document.getElementById('startBtn');
const highScoreEl = document.getElementById('highScore');

clickBtn.addEventListener('click', () => {
  if (gameActive) {
    score++;
    scoreEl.textContent = score;
  }
});

startBtn.addEventListener('click', () => {
  // Reiniciar valores
  score = 0;
  time = 10;
  gameActive = true;
  
  // Bloquear/Desbloquear interfaz
  startBtn.disabled = true;
  clickBtn.disabled = false;
  
  scoreEl.textContent = score;
  timeEl.textContent = time;

  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      endGame();
    }
  }, 1000);
});

function endGame() {
  clearInterval(timer);
  gameActive = false;
  startBtn.disabled = false;
  clickBtn.disabled = true;

  // Cálculo de Clicks por Segundo (CPS)
  const cps = score / 10;
  
  if (score > highRick) {
      highRick = score;
      highScoreEl.textContent = `Récord: ${highRick}`;
  }

  alert(`¡Juego Terminado!\nClicks totales: ${score}\nVelocidad: ${cps} CPS`);
}
