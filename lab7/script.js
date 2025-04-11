const circle = document.getElementById('circle');
const button = document.getElementById('start');

setInterval(() => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  circle.style.backgroundColor = randomColor;
}, 9000);

button.addEventListener('click', () => {
  circle.classList.add('animate');
});

