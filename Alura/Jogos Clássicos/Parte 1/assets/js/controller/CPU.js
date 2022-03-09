import { globals } from '../main--modules.js';

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

export default autoMovementPlayer2;
