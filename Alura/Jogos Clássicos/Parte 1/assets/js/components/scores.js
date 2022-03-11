import { globals } from '../main--modules.js';

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

export default drawScores;
