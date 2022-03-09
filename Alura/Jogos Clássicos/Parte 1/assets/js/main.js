const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.canvas.height = window.innerHeight - canvas.offsetHeight;
context.canvas.width = window.innerWidth - canvas.offsetWidth;

const globals = {};

const drawBackground = () => {
  const background = {
    colorBg: 'black',

    draw() {
      context.fillStyle = background.colorBg;
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
      context.fillStyle = globals.fieldLines.colorObjects;
      context.textAlign = 'left';
      context.fillText(
        `${score.player1}`,
        globals.fieldLines.xCenter - globals.fieldLines.xCenter / 2,
        globals.fieldLines.yCenter / 2
      );
      context.textAlign = 'right';
      context.fillText(
        `${score.player2}`,
        globals.fieldLines.xCenter + globals.fieldLines.xCenter / 2,
        globals.fieldLines.yCenter / 2
      );
    },

    /*centraliza e inverte o movimento da bola ao sair por uma das extremidades X do campo*/
    centerBall() {
      globals.ball.xBall = globals.fieldLines.xCenter;
      globals.ball.yBall = globals.fieldLines.yCenter;
      globals.ball.xBallMove = -globals.ball.xBallMove;
    },

    /*marca pontos para o jogador com base na lateral X do campo que a bola saiu*/
    update() {
      /*gerencia pontos do player1*/
      if (globals.ball.xBall + globals.ball.ballRadius >= canvas.width) {
        score.player1++;
        score.centerBall();
      }

      /*gerencia pontos do player2*/
      if (globals.ball.xBall - globals.ball.ballRadius <= 0) {
        score.player2++;
        score.centerBall();
      }
    },
  };
  return score;
};

const drawFieldLines = () => {
  const fieldLines = {
    lineSize: 10,
    xCenter: canvas.width / 2,
    yCenter: canvas.height / 2,
    colorObjects: 'white',
    bottomLineX: 10,
    bottomLineY: canvas.height - 10 * 2,
    topLineX: 10,
    topLineY: 10,

    draw() {
      /*parâmetros lateral superior*/
      context.fillStyle = fieldLines.colorObjects;
      context.fillRect(
        fieldLines.topLineX,
        fieldLines.topLineY,
        canvas.width - fieldLines.lineSize * 2,
        fieldLines.lineSize
      );

      /*parâmetros lateral inferior*/
      context.fillStyle = fieldLines.colorObjects;
      context.fillRect(
        fieldLines.bottomLineX,
        fieldLines.bottomLineY,
        canvas.width - fieldLines.lineSize * 2,
        fieldLines.lineSize
      );

      /*parâmetros da rede*/
      context.beginPath();
      context.setLineDash([45, 20]);
      context.moveTo(
        fieldLines.xCenter,
        canvas.height - fieldLines.lineSize * 3
      );
      context.lineTo(fieldLines.xCenter, fieldLines.lineSize * 3);
      context.lineWidth = fieldLines.lineSize;
      context.strokeStyle = fieldLines.colorObjects;
      context.stroke();
    },

    update() {
      /*inverte a direção de movimento Y da bola ao tocar em uma das extremidades Y do campo*/
      if (
        globals.ball.yBall + globals.ball.ballRadius >=
          fieldLines.bottomLineY ||
        globals.ball.yBall - globals.ball.ballRadius <=
          fieldLines.topLineY + fieldLines.lineSize
      ) {
        globals.ball.yBallMove = -globals.ball.yBallMove;
      }
    },
  };
  return fieldLines;
};

const drawBall = () => {
  const ball = {
    ballRadius: 10,
    xBall: globals.fieldLines.xCenter,
    xBallMove: 5,
    yBall: globals.fieldLines.yCenter,
    yBallMove: 5,

    draw() {
      /*parâmetros referentes a bola*/
      context.fillStyle = globals.fieldLines.colorObjects;
      context.beginPath();
      context.arc(ball.xBall, ball.yBall, ball.ballRadius, 0, 2 * 3.14);
      context.fill();
    },

    update() {
      /*adiciona o movimento a bola*/
      ball.xBall += ball.xBallMove;
      ball.yBall += ball.yBallMove;
    },
  };
  return ball;
};

const drawPlayers = () => {
  const players = {
    playerHeight: 100,
    player1Y: globals.fieldLines.yCenter - 50,
    player2Y: globals.fieldLines.yCenter - 50,
    player1X: globals.fieldLines.lineSize,
    player2X: canvas.width - globals.fieldLines.lineSize * 2,
    playersSpeed: 2 * globals.ball.xBallMove,

    draw() {
      /*especifica a cor que os players são criados*/
      context.fillStyle = globals.fieldLines.colorObjects;
      /*parâmetros referentes ao player1*/
      context.fillRect(
        players.player1X,
        players.player1Y,
        globals.fieldLines.lineSize,
        players.playerHeight
      );

      /*parâmetros referentes ao player2*/
      context.fillRect(
        players.player2X,
        players.player2Y,
        globals.fieldLines.lineSize,
        players.playerHeight
      );
    },

    update() {
      /*delimita os extremos dos players para ter interação com a bola*/
      if (
        (globals.ball.xBall + globals.ball.ballRadius >= players.player2X &&
          globals.ball.yBall - globals.ball.ballRadius >= players.player2Y &&
          globals.ball.yBall + globals.ball.ballRadius <=
            players.player2Y + players.playerHeight) ||
        (globals.ball.xBall - globals.ball.ballRadius <=
          players.player1X + globals.fieldLines.lineSize &&
          globals.ball.yBall - globals.ball.ballRadius >= players.player1Y &&
          globals.ball.yBall + globals.ball.ballRadius <=
            players.player1Y + players.playerHeight)
      ) {
        globals.ball.xBallMove = -globals.ball.xBallMove;
      }
    },
  };
  return players;
};
/*função para automatizar os movimentos do player2*/
const autoMovementPlayer2 = () => {
  const player2DetectionRange =
      globals.fieldLines.xCenter + globals.fieldLines.xCenter / 5,
    player2Center = globals.players.player2Y + globals.players.playerHeight / 2;

  if (globals.ball.xBall >= player2DetectionRange) {
    if (
      globals.players.player2Y >
        globals.fieldLines.topLineY + globals.fieldLines.lineSize * 2 &&
      globals.ball.yBall <= player2Center
    ) {
      globals.players.player2Y -= globals.players.playersSpeed;
    }

    if (
      globals.players.player2Y + globals.players.playerHeight <
        globals.fieldLines.bottomLineY - globals.fieldLines.lineSize &&
      globals.ball.yBall >= player2Center
    ) {
      globals.players.player2Y += globals.players.playersSpeed;
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
      if (
        globals.players.player2Y >
        globals.fieldLines.topLineY + globals.fieldLines.lineSize * 2
      ) {
        globals.players.player2Y -= globals.players.playersSpeed;
      }
    },
    ArrowDown() {
      if (
        globals.players.player2Y + globals.players.playerHeight <
        globals.fieldLines.bottomLineY - globals.fieldLines.lineSize
      ) {
        globals.players.player2Y += globals.players.playersSpeed;
      }
    },
    /*comandos responsáveis pelo player1*/
    KeyW() {
      if (
        globals.players.player1Y >
        globals.fieldLines.topLineY + globals.fieldLines.lineSize * 2
      ) {
        globals.players.player1Y -= globals.players.playersSpeed;
      }
    },
    KeyS() {
      if (
        globals.players.player1Y + globals.players.playerHeight <
        globals.fieldLines.bottomLineY - globals.fieldLines.lineSize
      ) {
        globals.players.player1Y += globals.players.playersSpeed;
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
  autoMovementPlayer2();
  globals.background.draw();
  globals.score.draw();
  globals.fieldLines.draw();
  globals.ball.draw();
  globals.players.draw();

  requestAnimationFrame(animation);
};

animation();
