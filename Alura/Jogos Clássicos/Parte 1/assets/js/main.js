const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.height = window.innerHeight - canvas.offsetHeight;
ctx.canvas.width = window.innerWidth - canvas.offsetWidth;

const lineSize = 10,
  ballRadius = 10,
  ballSpeed = 5,
  bottomLineX = 10,
  bottomLineY = canvas.height - lineSize * 2,
  colorBg = 'black',
  colorObjects = 'white',
  player1X = lineSize,
  player2X = canvas.width - lineSize * 2,
  playerHeight = 100,
  playersSpeed = 2 * ballSpeed,
  topLineX = 10,
  topLineY = 10,
  xCenter = canvas.width / 2,
  yCenter = canvas.height / 2;

let player1Y = yCenter - playerHeight / 2,
  player2Y = yCenter - playerHeight / 2,
  xBall = xCenter,
  xBallMove = ballSpeed,
  yBall = yCenter,
  yBallMove = ballSpeed;

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

const drawBall = () => {
  /*parâmetros referentes a bola*/
  ctx.fillStyle = colorObjects;
  ctx.beginPath();
  ctx.arc(xBall, yBall, ballRadius, 0, 2 * 3.14);
  ctx.fill();

  /*adiciona o movimento a bola*/
  xBall += xBallMove;
  yBall += yBallMove;
};

const drawPlayers = () => {
  /*parâmetros referentes ao player1*/
  ctx.fillStyle = colorObjects;
  ctx.fillRect(player1X, player1Y, lineSize, playerHeight);

  /*parâmetros referentes ao player2*/
  ctx.fillStyle = colorObjects;
  ctx.fillRect(player2X, player2Y, lineSize, playerHeight);

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
};
/*função para automatizar os movimentos do player2*/
const autoMovementPlayer2 = () => {
  const player2DetectionRange = xCenter + xCenter / 5,
    player2Center = player2Y + playerHeight / 2;

  if (xBall >= player2DetectionRange) {
    if (player2Y > topLineY + lineSize * 2 && yBall <= player2Center) {
      player2Y -= playersSpeed;
    }

    if (
      player2Y + playerHeight < bottomLineY - lineSize &&
      yBall >= player2Center
    ) {
      player2Y += playersSpeed;
    }
  }
};

/*cuida das teclas pressionadas*/
const handleKeysPressed = (event) => {
  const code = event.code;
  initializeCommand(event, code);
};

/*inicializa os comandos com base nas teclas pressionadas*/
const initializeCommand = (event, code) => {
  const acceptedKeys = {
    /*comandos responsáveis pelo player2*/
    ArrowUp() {
      if (player2Y > topLineY + lineSize * 2) {
        player2Y -= playersSpeed;
      }
    },
    ArrowDown() {
      if (player2Y + playerHeight < bottomLineY - lineSize) {
        player2Y += playersSpeed;
      }
    },
    /*comandos responsáveis pelo player1*/
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

  const moveIt = acceptedKeys[code];

  if (moveIt) {
    event.preventDefault();
    moveIt();
  }
};

/*adiciona um escutador para as teclas pressionadas*/
window.addEventListener('keydown', handleKeysPressed);

/*faz a animação do jogo ocorrer*/
const animation = () => {
  drawBackground();
  drawFieldLines();
  autoMovementPlayer2();
  drawBall();
  drawPlayers();

  requestAnimationFrame(animation);
};

animation();
