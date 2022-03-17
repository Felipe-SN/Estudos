import { globals } from '../main--modules.js';

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

export default enablesCPUMovement;
