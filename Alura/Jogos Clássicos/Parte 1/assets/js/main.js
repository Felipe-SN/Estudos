const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.height = window.innerHeight - canvas.offsetHeight;
ctx.canvas.width = window.innerWidth - canvas.offsetWidth;

const ballRadius = 10;
const ballSpeed = 6;
const playersSpeed = 10;
const colorBg = 'black';
const colorObjects = 'white';
const lineSize = 10;
const player1X = lineSize;
const player2X = canvas.width - lineSize * 2;
const playerHeight = 100;
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;

let player1Y = yCenter - playerHeight / 2;
let player2Y = yCenter - playerHeight / 2;
let xBall = xCenter;
let xBallMove = ballSpeed;
let yBall = yCenter;
let yBallMove = ballSpeed;

const drawBackground = () => {
  ctx.fillStyle = colorBg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const drawCenterLine = () => {
  ctx.fillStyle = colorObjects;
  ctx.fillRect(xCenter - lineSize / 2, 0, lineSize, canvas.height);
};

const drawBall = () => {
  /*parâmetros referentes a bola*/
  ctx.fillStyle = colorObjects;
  ctx.beginPath();
  ctx.arc(xBall, yBall, ballRadius, 0, 2 * 3.14);
  ctx.fill();

  /*adiciona o movimento a bola*/
  xBall += xBallMove;
  yBall += yBallMove;

  /*delimita os estremas do player para ter interação com a bola*/
  if (
    (xBall + ballRadius >= player2X &&
      yBall - ballRadius >= player2Y &&
      yBall + ballRadius <= player2Y + playerHeight) ||
    (xBall - ballRadius <= player1X + lineSize &&
      yBall - ballRadius >= player1Y &&
      yBall + ballRadius <= player1Y + playerHeight)
  ) {
    xBallMove = -xBallMove;
  }
  /*centraliza e inverte a posição da bola ao sair por uma das extremidades X do campo*/
  if (xBall + ballRadius >= canvas.width || xBall - ballRadius <= 0) {
    xBall = xCenter;
    yBall = yCenter;
    xBallMove = -xBallMove;
  }
  /*inverte a direção de movimento Y da bola ao tocar em uma das extremidades Y do campo*/
  if (yBall + ballRadius >= canvas.height || yBall - ballRadius <= 0) {
    yBallMove = -yBallMove;
  }
};

const drawPlayers = () => {
  /*parâmetros referentes ao player1*/
  ctx.fillStyle = colorObjects;
  ctx.fillRect(player1X, player1Y, lineSize, playerHeight);

  /*parâmetros referentes ao player2*/
  ctx.fillStyle = colorObjects;
  ctx.fillRect(player2X, player2Y, lineSize, playerHeight);
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const commands = (event) => {
  event.preventDefault();

  const code = event.code;

  const teclasAceitas = {
    ArrowUp() {
      if (player1Y > 0) {
        player1Y -= playersSpeed;
      }
    },
    ArrowDown() {
      if (player1Y + playerHeight < canvas.height) {
        player1Y += playersSpeed;
      }
    },
  };

  const fazMover = teclasAceitas[code];

  if (fazMover) {
    fazMover();
  }
};

window.addEventListener('keydown', commands);

const animation = () => {
  clearCanvas();
  drawBackground();
  drawCenterLine();
  drawBall();
  drawPlayers();

  requestAnimationFrame(animation);
};

animation();
