const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth - canvas.offsetWidth;
ctx.canvas.height = window.innerHeight - canvas.offsetHeight;

const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;
const ballSize = 20;
let xBall = canvas.width / 2;
let yBall = canvas.height / 2;

const drawCenterLine = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(xCenter, 0, 10, canvas.height);
};

const drawBall = () => {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(xBall, yBall, ballSize, 0, 2 * 3.14);
  ctx.fill();
};

drawBall();
