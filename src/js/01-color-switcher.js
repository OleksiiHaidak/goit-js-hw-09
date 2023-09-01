const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBgColor = document.querySelector('body');
let colorChangerStart = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

startBtn.addEventListener("click", () => {
    if (!colorChangerStart) {
colorChangerStart = setInterval(() => {
      bodyBgColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
startBtn.classList.add('disabled');
startBtn.disabled = true;
  }
});

stopBtn.addEventListener("click", () => {
    clearInterval(colorChangerStart);
colorChangerStart = null;
startBtn.classList.remove('disabled');
startBtn.disabled = false;
});