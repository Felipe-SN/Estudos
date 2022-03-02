const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.height = window.innerHeight - canvas.offsetHeight;
ctx.canvas.width = window.innerWidth - canvas.offsetWidth;

const ballRadius = 10;
const ballSpeed = 5;
const lineSize = 10;
const objectColor = 'white';
const playerHeight = 100;
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;

let player1X = lineSize;
let player1Y = yCenter - playerHeight / 2;
let player2X = canvas.width - lineSize * 2;
let player2Y = yCenter - playerHeight / 2;
let xBall = canvas.width / 2;
let xBallMove = ballSpeed;
let yBall = canvas.height / 2;
let yBallMove = ballSpeed;

const drawCenterLine = () => {
  ctx.fillStyle = objectColor;
  ctx.fillRect(xCenter - lineSize / 2, 0, lineSize, canvas.height);
};

const drawBall = () => {
  /*parâmetros referentes a bola*/
  ctx.fillStyle = objectColor;
  ctx.beginPath();
  ctx.arc(xBall, yBall, ballRadius, 0, 2 * 3.14);
  ctx.fill();

  /*parâmetros referentes ao movimento e interação da bola*/
  xBall += xBallMove;
  yBall += yBallMove;

  if (
    (xBall + ballRadius >= player2X &&
      yBall - ballRadius >= player2Y &&
      yBall + ballRadius <= player2Y + playerHeight) ||
    (xBall - ballRadius <= player1X &&
      yBall - ballRadius >= player1Y &&
      yBall + ballRadius <= player1Y + playerHeight)
  ) {
    xBallMove = -xBallMove;
  }

  if (xBall + ballRadius >= canvas.width || xBall - ballRadius <= 0) {
    xBallMove = -xBallMove;
  }

  if (yBall + ballRadius >= canvas.height || yBall - ballRadius <= 0) {
    yBallMove = -yBallMove;
  }
};

const drawPlayers = () => {
  /*parâmetros referentes ao player1*/
  ctx.fillStyle = objectColor;
  ctx.fillRect(player1X, player1Y, lineSize, playerHeight);

  /*parâmetros referentes ao player2*/
  ctx.fillStyle = objectColor;
  ctx.fillRect(player2X, player2Y, lineSize, playerHeight);
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
