import drawBackground from './components/background.js';
import drawFieldLines from './components/fieldLines.js';
import drawScores from './components/scores.js';
import drawBall from './components/ball.js';
import drawPlayers from './components/players.js';
import handleKeysPressed from './controller/commands.js';
import movementCPU from './controller/CPU.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.canvas.height = window.innerHeight - canvas.offsetHeight;
context.canvas.width = window.innerWidth - canvas.offsetWidth;

const globals = {};

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
  movementCPU();
  globals.background.draw();
  globals.score.draw();
  globals.fieldLines.draw();
  globals.ball.draw();
  globals.players.draw();

  requestAnimationFrame(animation);
};

animation();

export { globals };
