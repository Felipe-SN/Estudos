const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.canvas.height = window.innerHeight - canvas.offsetHeight;
context.canvas.width = window.innerWidth - canvas.offsetWidth;

const globals = {},
  lineSize = 10,
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
  const background = {
    draw() {
      context.fillStyle = colorBg;
      context.fillRect(0, 0, canvas.width, canvas.height);
    },
  };
  return background;
};

const drawScores = () => {
  const score = {
    /*contagem de pontos iniciais*/
    player1: 0,
    player2: 0,

    /*desenha o placar de ambos os players*/
    draw() {
      context.font = `200px "VT323"`;
      context.fillStyle = colorObjects;
      context.textAlign = 'left';
      context.fillText(`${score.player1}`, xCenter - xCenter / 2, yCenter / 2);
      context.textAlign = 'right';
      context.fillText(`${score.player2}`, xCenter + xCenter / 2, yCenter / 2);
    },

    /*centraliza e inverte o movimento da bola ao sair por uma das extremidades X do campo*/
    centerBall() {
      xBall = xCenter;
      yBall = yCenter;
      xBallMove = -xBallMove;
    },

    /*marca pontos para o jogador com base na lateral X do campo que a bola saiu*/
    update() {
      /*gerencia pontos do player1*/
      if (xBall + ballRadius >= canvas.width) {
        score.player1++;
        score.centerBall();
      }

      /*gerencia pontos do player2*/
      if (xBall - ballRadius <= 0) {
        score.player2++;
        score.centerBall();
      }
    },
  };
  return score;
};

const drawFieldLines = () => {
  const fieldLines = {
    draw() {
      /*parâmetros lateral superior*/
      context.fillStyle = colorObjects;
      context.fillRect(
        topLineX,
        topLineY,
        canvas.width - lineSize * 2,
        lineSize
      );

      /*parâmetros lateral inferior*/
      context.fillStyle = colorObjects;
      context.fillRect(
        bottomLineX,
        bottomLineY,
        canvas.width - lineSize * 2,
        lineSize
      );

      /*parâmetros da rede*/
      context.beginPath();
      context.setLineDash([45, 20]);
      context.moveTo(xCenter, canvas.height - lineSize * 3);
      context.lineTo(xCenter, lineSize * 3);
      context.lineWidth = lineSize;
      context.strokeStyle = colorObjects;
      context.stroke();
    },

    update() {
      /*inverte a direção de movimento Y da bola ao tocar em uma das extremidades Y do campo*/
      if (
        yBall + ballRadius >= bottomLineY ||
        yBall - ballRadius <= topLineY + lineSize
      ) {
        yBallMove = -yBallMove;
      }
    },
  };
  return fieldLines;
};

const drawBall = () => {
  const ball = {
    draw() {
      /*parâmetros referentes a bola*/
      context.fillStyle = colorObjects;
      context.beginPath();
      context.arc(xBall, yBall, ballRadius, 0, 2 * 3.14);
      context.fill();
    },

    update() {
      /*adiciona o movimento a bola*/
      xBall += xBallMove;
      yBall += yBallMove;
    },
  };
  return ball;
};

const drawPlayers = () => {
  const players = {
    draw() {
      /*parâmetros referentes ao player1*/
      context.fillStyle = colorObjects;
      context.fillRect(player1X, player1Y, lineSize, playerHeight);

      /*parâmetros referentes ao player2*/
      context.fillStyle = colorObjects;
      context.fillRect(player2X, player2Y, lineSize, playerHeight);
    },

    update() {
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
    },
  };
  return players;
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

globals.score = drawScores();
globals.background = drawBackground();
globals.fieldLines = drawFieldLines();
globals.ball = drawBall();
globals.players = drawPlayers();

/*faz a animação do jogo ocorrer*/
const animation = () => {
  globals.score.update();
  globals.fieldLines.update();
  globals.ball.update();
  globals.players.update();
  globals.background.draw();
  globals.score.draw();
  globals.fieldLines.draw();
  globals.ball.draw();
  globals.players.draw();

  drawPlayers();

  requestAnimationFrame(animation);
};

animation();
