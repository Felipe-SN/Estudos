var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

pincel.fillStyle = `gray`;
pincel.fillRect(0, 0, tela.width, tela.height);

var raio = 10;
var posX = tela.width / 2;
var posY = tela.height / 2;

function criaCirculo(posX, posY, raio, cor) {
	pincel.fillStyle = cor;
	pincel.beginPath();
	pincel.arc(posX, posY, raio, 0, 2 * 3.14);
	pincel.fill();
}

function disparo(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;

	if (
		x < posX + raio &&
		x > posX - raio &&
		y < posY + raio &&
		y > posY - raio
	) {
		alert(`!!ACERTOU!!`);
	}
}

criaCirculo(posX, posY, raio + 20, `red`);
criaCirculo(posX, posY, raio + 10, `white`);
criaCirculo(posX, posY, raio, `red`);

tela.onclick = disparo;
