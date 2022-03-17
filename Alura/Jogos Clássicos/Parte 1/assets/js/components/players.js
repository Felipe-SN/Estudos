import { globals } from '../main--modules.js';

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

export default drawPlayers;
