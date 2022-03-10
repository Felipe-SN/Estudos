import { globals } from '../main--modules.js';

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

export default drawFieldLines;
