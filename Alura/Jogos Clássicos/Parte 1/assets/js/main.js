const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.canvas.height = window.innerHeight - canvas.offsetHeight;
context.canvas.width = window.innerWidth - canvas.offsetWidth;

/*adiciona musica de fundo ao jogo*/
const soundtrack = () => {
  const soundtrack = new Audio('./assets/sounds/soundtrack.mp3');

  soundtrack.loop = true;
  window.onload = soundtrack.play();
};

/*parâmetros e regras para criar o plano de fundo do jogo*/
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

/*parâmetros e regras para criar o placar do jogo*/
const drawScores = () => {
  const score = {
    scoreSound: new Audio('./assets/sounds/point.mp3'),
    /*contagem de pontos iniciais*/
    player1: 0,
    player2: 0,

    /*desenha o placar de ambos os players*/
    draw() {
      context.font = `150px "VT323"`;
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
        score.scoreSound.play();
        score.centerBall();
      }

      /*gerencia pontos do player2*/
      if (globals.ball.xBall - globals.ball.ballRadius <= 0) {
        score.player2++;
        score.scoreSound.play();
        score.centerBall();
      }
    },
  };
  return score;
};

/*parâmetros e regras para criar as linhas e rede do campo*/
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

/*parâmetros e regras para criar a bola*/
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

/*parâmetros e regras para criar os players*/
const drawPlayers = () => {
  const players = {
    hitPaddleSound: new Audio('./assets/sounds/paddle_hit.mp3'),
    height: 100,
    player1Y: globals.fieldLines.yCenter - 50,
    player2Y: globals.fieldLines.yCenter - 50,
    player1X: globals.fieldLines.lineSize,
    player2X: canvas.width - globals.fieldLines.lineSize * 2,
    speed: 2 * globals.ball.xBallMove,

    draw() {
      /*especifica a cor que os players são criados*/
      context.fillStyle = globals.fieldLines.colorObjects;
      /*parâmetros referentes ao player1*/
      context.fillRect(
        players.player1X,
        players.player1Y,
        globals.fieldLines.lineSize,
        players.height
      );

      /*parâmetros referentes ao player2*/
      context.fillRect(
        players.player2X,
        players.player2Y,
        globals.fieldLines.lineSize,
        players.height
      );
    },

    update() {
      /*delimita os extremos dos players para rebater a bola e toca o som de contato*/
      if (
        (globals.ball.xBall + globals.ball.ballRadius >= players.player2X &&
          globals.ball.yBall - globals.ball.ballRadius >= players.player2Y &&
          globals.ball.yBall + globals.ball.ballRadius <=
            players.player2Y + players.height) ||
        (globals.ball.xBall - globals.ball.ballRadius <=
          players.player1X + globals.fieldLines.lineSize &&
          globals.ball.yBall - globals.ball.ballRadius >= players.player1Y &&
          globals.ball.yBall + globals.ball.ballRadius <=
            players.player1Y + players.height)
      ) {
        players.hitPaddleSound.play();
        globals.ball.xBallMove = -globals.ball.xBallMove;
      }
    },
  };
  return players;
};

/*função para automatizar os movimentos do player2*/
const enablesCPUMovement = () => {
  const movementCPU = {
    /*especifica o limite de detecção da CPU em ralação a bola */
    detectionRangeCPU: globals.fieldLines.xCenter,
    intervalUpScaling: 10,
    speedCPU: 4.15,

    update() {
      const middleCPU = globals.players.player2Y + 50;
      /*detecta quando a bola passa do limite pre determinado*/
      if (globals.ball.xBall >= movementCPU.detectionRangeCPU) {
        /*faz com que a CPU movimente o player2*/
        if (
          globals.ball.yBall <= middleCPU &&
          globals.players.player2Y >=
            globals.fieldLines.topLineY + globals.fieldLines.lineSize * 2
        ) {
          globals.players.player2Y -= movementCPU.speedCPU;
        }

        if (
          globals.ball.yBall >= middleCPU &&
          globals.players.player2Y + globals.players.height <=
            globals.fieldLines.bottomLineY - globals.fieldLines.lineSize
        ) {
          globals.players.player2Y += movementCPU.speedCPU;
        }
      }

      /*especifica a velocidade de movimento da CPU e o aumento de dificuldade*/
      const intervalReached =
        globals.score.player1 === movementCPU.intervalUpScaling;

      if (intervalReached) {
        movementCPU.speedCPU = movementCPU.speedCPU * 1.04;
        movementCPU.intervalUpScaling += 10;
      }
    },
  };
  return movementCPU;
};

/*cuida das teclas pressionadas*/
const handleKeysPressed = (event) => {
  console.table(event.type);
  const code = event.code;
  initializeCommand(event, code);
};

/*inicializa os comandos com base nas teclas pressionadas*/
const initializeCommand = (event, code) => {
  const acceptedKeys = {
    /*comandos responsáveis pelo player2*/
    ArrowUp() {
      if (
        globals.players.player2Y >=
        globals.fieldLines.topLineY + globals.fieldLines.lineSize * 2
      ) {
        globals.players.player2Y -= globals.players.speed;
      }
    },
    ArrowDown() {
      if (
        globals.players.player2Y + globals.players.height <=
        globals.fieldLines.bottomLineY - globals.fieldLines.lineSize
      ) {
        globals.players.player2Y += globals.players.speed;
      }
    },
    /*comandos responsáveis pelo player1*/
    KeyW() {
      if (
        globals.players.player1Y >=
        globals.fieldLines.topLineY + globals.fieldLines.lineSize * 2
      ) {
        globals.players.player1Y -= globals.players.speed;
      }
    },
    KeyS() {
      if (
        globals.players.player1Y + globals.players.height <=
        globals.fieldLines.bottomLineY - globals.fieldLines.lineSize
      ) {
        globals.players.player1Y += globals.players.speed;
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

const globals = {};

globals.score = drawScores();
globals.background = drawBackground();
globals.fieldLines = drawFieldLines();
globals.ball = drawBall();
globals.players = drawPlayers();
globals.movementCPU = enablesCPUMovement();

/*faz a animação do jogo ocorrer*/
const animation = () => {
  globals.background.draw();
  globals.score.draw();
  globals.fieldLines.draw();
  globals.ball.draw();
  globals.players.draw();
  globals.movementCPU.update();
  globals.players.update();
  globals.score.update();
  globals.fieldLines.update();
  globals.ball.update();

  requestAnimationFrame(animation);
};

soundtrack();
animation();
