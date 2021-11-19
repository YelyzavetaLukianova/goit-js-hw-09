const btnStartRef = document.querySelector('[type="button"]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

btnStartRef.addEventListener('click', updateColor);

let dateId = 0;

function updateColor() {
  btnStartRef.disabled = true;
  dateId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

btnStopRef.addEventListener('click', e => {
  btnStartRef.disabled = false;
  clearInterval(dateId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
