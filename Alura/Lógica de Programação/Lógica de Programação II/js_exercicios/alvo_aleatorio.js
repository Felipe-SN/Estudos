var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

pincel.fillStyle = `gray`;
pincel.fillRect(0, 0, tela.width, tela.height);

function criaCirculo(posX, posY, raio, cor) {
	pincel.fillStyle = cor;
	pincel.beginPath();
	pincel.arc(posX, posY, raio, 0, 2 * Math.PI);
	pincel.fill();
}

function sorteiaPosicao(maximo) {
	return Math.floor(Math.random() * maximo);
}

function disparo(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;

	if (
		(x < posX + raio) &&
		(x > posX - raio) &&
		(y < posY + raio) &&
		(y > posY - raio)
	) {
		alert(`!!ACERTOU!!`);
	}
}

function criaAlvo(posX, posY) {
	criaCirculo(posX, posY, raio + 20, `red`);
	criaCirculo(posX, posY, raio + 10, `white`);
	criaCirculo(posX, posY, raio, `red`);
}

function limpaTela() {
	pincel.clearRect(0, 0, tela.width, tela.height);
}

function atualizaTela() {
	posX = sorteiaPosicao(tela.width - tela.offsetLeft - (raio + 20));
	posY = sorteiaPosicao(tela.height - tela.offsetTop - (raio + 20));
	limpaTela();
	criaAlvo(posX, posY);
}

setInterval(atualizaTela, 1500)

var posX;
var posY;
var raio = 10;

tela.onclick = disparo;
