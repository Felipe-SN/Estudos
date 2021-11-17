var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);
pincel.fillStyle = `lightgray`;
pincel.fillRect(0, 0, tela.width, tela.height);

function desenhaCirculo(x, y, raio, cor) {
	pincel.fillStyle = cor;
	pincel.beginPath();
	pincel.arc(x, y, raio, 0, 2 * 3.14);
	pincel.fill();
}

function desenhaFlor(posX, posY, raio) {
	var modficadorPosicao = raio * 2;

	desenhaCirculo(posX, posY, raio, `red`);
	desenhaCirculo(posX - modficadorPosicao, posY, raio, `orange`);
	desenhaCirculo(posX + modficadorPosicao, posY, raio, `black`);
	desenhaCirculo(posX, posY - modficadorPosicao, raio, `yellow`);
	desenhaCirculo(posX, posY + modficadorPosicao, raio, `blue`);
}

const centroX = tela.width / 2;
const centroY = tela.height / 2;

desenhaFlor(centroX, centroY, 20);
