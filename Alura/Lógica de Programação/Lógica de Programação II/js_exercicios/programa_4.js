var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

pincel.fillStyle = `lightgray`;
pincel.fillRect(0, 0, tela.width, tela.height);

var raio = 20;
var posX = tela.width / 2;
var posY = tela.height / 2;
// var movimento = 1;
// var pulso = 1;

var esquerda = 37;
var cima = 38;
var direita = 39;
var baixo = 40;

var taxa = 10;

function criaCirculo(posX, posY, raio, cor) {
	pincel.fillStyle = cor;
	pincel.beginPath();
	pincel.arc(posX, posY, raio, 0, 2 * Math.PI);
	pincel.fill();
}

function limpaTela() {
	pincel.clearRect(0, 0, tela.width, tela.height);
}

function atualizaTela() {
	limpaTela();
	criaCirculo(posX, posY, raio, `red`);
	// if (posX < 0 + raio) {
	// 	movimento = 1;
	// } else if (posX > tela.width - raio) {
	// 	movimento = -1;
	// }

	// if (raio < 20) {
	// 	pulso = 1;
	// } else if (raio > 30) {
	// 	pulso = -1;
	// }

	// posX += movimento;
	// raio += pulso;
}

function leTeclado(event) {
	if (event.keyCode == esquerda && posX >= 0 + raio + tela.offsetLeft) {
		posX += -taxa;
	} else if (event.keyCode == cima && posY >= 0 + raio + tela.offsetTop) {
		posY += -taxa;
	} else if (
		event.keyCode == direita &&
		posX <= tela.width - raio - tela.offsetLeft
	) {
		posX += taxa;
	} else if (
		event.keyCode == baixo &&
		posY <= tela.height - raio - tela.offsetTop
	) {
		posY += taxa;
	}
}

document.onkeydown = leTeclado;

setInterval(atualizaTela, 20);
