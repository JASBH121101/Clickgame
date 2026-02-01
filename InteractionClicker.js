let score = 0;
let time = 10;
let timer;
let gameActive = false;
let highRick = 0; // Manteniendo el nombre que tenías

const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const clickBtn = document.getElementById('clickBtn');
const startBtn = document.getElementById('startBtn');
const highScoreEl = document.getElementById('highScore');
const modal = document.getElementById('resultModal');
const finalScoreText = document.getElementById('finalScoreText');

clickBtn.addEventListener('click', () => {
  if (gameActive) {
    score++;
    scoreEl.textContent = score;
  }
});

startBtn.addEventListener('click', () => {
  score = 0;
  time = 10;
  gameActive = true;
  
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

  const cps = (score / 10).toFixed(1);
  
  if (score > highRick) {
      highRick = score;
      highScoreEl.textContent = `Récord: ${highRick}`;
  }

  // En lugar de alert, mostramos el modal
  finalScoreText.innerHTML = `Clicks totales: <b>${score}</b><br>Velocidad: <b>${cps} CPS</b>`;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
