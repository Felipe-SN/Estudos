import { globals } from '../main--modules.js';

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

export default drawPlayers;
