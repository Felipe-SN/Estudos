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

export default drawBall;
