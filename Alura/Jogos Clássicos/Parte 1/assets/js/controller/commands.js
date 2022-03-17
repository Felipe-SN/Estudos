import { globals } from '../main--modules.js';

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

export default handleKeysPressed;
