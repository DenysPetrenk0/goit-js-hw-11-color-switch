const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const body = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId;

body.addEventListener('click', onclick);

function onclick(e) {
  const nameBtn = e.target.dataset.action;
  if (nameBtn === 'stop') {
    clearInterval(intervalId);
    return;
  }
  intervalId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}
