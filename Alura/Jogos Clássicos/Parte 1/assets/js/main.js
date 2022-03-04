const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.height = window.innerHeight - canvas.offsetHeight;
ctx.canvas.width = window.innerWidth - canvas.offsetWidth;

const lineSize = 10;
const ballRadius = 10;
const ballSpeed = 6;
const bottomLineX = 10;
const bottomLineY = canvas.height - lineSize * 2;
const colorBg = 'black';
const colorObjects = 'white';
const player1X = lineSize;
const player2X = canvas.width - lineSize * 2;
const playerHeight = 100;
const playersSpeed = 10;
const topLineX = 10;
const topLineY = 10;
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

const drawFieldLines = () => {
  /*parâmetros lateral superior*/
  ctx.fillStyle = colorObjects;
  ctx.fillRect(topLineX, topLineY, canvas.width - lineSize * 2, lineSize);

  /*parâmetros lateral inferior*/
  ctx.fillStyle = colorObjects;
  ctx.fillRect(bottomLineX, bottomLineY, canvas.width - lineSize * 2, lineSize);

  /*parâmetros da rede*/
  ctx.beginPath();
  ctx.setLineDash([5, 10]);
  ctx.moveTo(xCenter, canvas.height - lineSize * 3);
  ctx.lineTo(xCenter, lineSize * 3);
  ctx.lineWidth = lineSize;
  ctx.strokeStyle = colorObjects;
  ctx.stroke();
};

const drawBall = () => {
  /*parâmetros referentes a bola*/
  ctx.fillStyle = colorObjects;
  ctx.beginPath();
  ctx.arc(xBall, yBall, ballRadius, 0, 2 * 3.14);
  ctx.fill();
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

const autoMovementPlayer2 = () => {
  const playerCenter = playerHeight / 2;
  const playerTop = player2Y;
  const playerBottom = player2Y + playerHeight;
  const player2Speed = yBall - playerHeight / 2;
  const hitTop =
    playerTop <= topLineY + lineSize * 2 && yBall <= playerCenter * 1.5;
  const hitBottom =
    playerBottom >= bottomLineY - lineSize && yBall >= playerTop ;

  if (hitTop) {
    player2Y = player2Y;
    return;
  }
  if (hitBottom) {
    player2Y = player2Y;
    return;
  }
  player2Y = player2Speed;
};

const commands = (event) => {
  event.preventDefault();

  const code = event.code;

  const teclasAceitas = {
    ArrowUp() {
      if (player2Y > topLineY + lineSize) {
        player2Y -= playersSpeed;
      }
    },
    ArrowDown() {
      if (player2Y + playerHeight < bottomLineY) {
        player2Y += playersSpeed;
      }
    },
    KeyW() {
      if (player1Y > topLineY + lineSize * 2) {
        player1Y -= playersSpeed;
      }
    },
    KeyS() {
      if (player1Y + playerHeight < bottomLineY - lineSize) {
        player1Y += playersSpeed;
      }
    },
  };

  const fazMover = teclasAceitas[code];

  if (fazMover) {
    event.preventDefault();
    fazMover();
  }
};

window.addEventListener('keydown', commands);

const ballInteractions = () => {
  /*adiciona o movimento a bola*/
  // xBall += xBallMove;
  yBall += yBallMove;

  /*delimita os extremos dos players para ter interação com a bola*/
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
  /*centraliza e inverte o movimento da bola ao sair por uma das extremidades X do campo*/
  if (xBall + ballRadius >= canvas.width || xBall - ballRadius <= 0) {
    xBall = xCenter;
    yBall = yCenter;
    xBallMove = -xBallMove;
  }
  /*inverte a direção de movimento Y da bola ao tocar em uma das extremidades Y do campo*/
  if (
    yBall + ballRadius >= bottomLineY ||
    yBall - ballRadius <= topLineY + lineSize
  ) {
    yBallMove = -yBallMove;
  }
};
const animation = () => {
  clearCanvas();
  drawBackground();
  drawFieldLines();
  autoMovementPlayer2();
  drawBall();
  ballInteractions();
  drawPlayers();

  requestAnimationFrame(animation);
};

animation();
