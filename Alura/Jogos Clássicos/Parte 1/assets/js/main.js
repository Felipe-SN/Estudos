const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.height = window.innerHeight - canvas.offsetHeight;
ctx.canvas.width = window.innerWidth - canvas.offsetWidth;

const ballRadius = 15;
const lineSize = 10;
const playerHeight = 100;
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;
let ballSpeed = 5;

let player1Y = yCenter - playerHeight / 2;
let player2Y = yCenter - playerHeight / 2;
let xBall = canvas.width / 2;
let yBall = canvas.height / 2;

const drawCenterLine = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(xCenter - lineSize / 2, 0, lineSize, canvas.height);
};

const drawBall = () => {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(xBall, yBall, ballRadius, 0, 2 * 3.14);
  ctx.fill();

  xBall += ballSpeed;
  yBall += ballSpeed;

  if (xBall + ballRadius >= canvas.width || xBall - ballRadius <= 0) {
    ballSpeed = -ballSpeed;
  }
  if (yBall + ballRadius >= canvas.height || yBall - ballRadius <= 0) {
    ballSpeed = -ballSpeed;
  }
};

const drawPlayers = () => {
  /*parâmetros referente ao player1*/
  ctx.fillStyle = 'white';
  ctx.fillRect(lineSize, player1Y, lineSize, playerHeight);

  /*parâmetros referente ao player2*/
  ctx.fillStyle = 'white';
  ctx.fillRect(canvas.width - lineSize * 2, player2Y, lineSize, playerHeight);
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const animation = () => {
  clearCanvas();
  drawCenterLine();
  drawBall();
  drawPlayers();

  requestAnimationFrame(animation);
};

animation();
