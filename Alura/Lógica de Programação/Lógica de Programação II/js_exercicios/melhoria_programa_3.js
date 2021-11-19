var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

pincel.fillStyle = `gray`;
pincel.fillRect(0, 0, tela.width, tela.height);

var posicao = 0;
var cores = [`blue`, `red`, `green`];
var raio = 10;

function trocaCor() {
	posicao++;

	if (posicao >= cores.length) {
		posicao = 0;
	}

	console.log(cores[posicao]);
	return false;
}

function criaCirculo(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;

	if (evento.shiftKey && evento.altKey) {
		alert(`Por favor, não pressione as teclas "Shift" e "Alt" ao mesmo tempo!`);
	} else if (evento.shiftKey && raio < 40) {
		raio = raio + 10;
	} else if (evento.altKey && raio > 10) {
		raio = raio - 5;
	}

	pincel.fillStyle = cores[posicao];
	pincel.beginPath();
	pincel.arc(x, y, raio, 0, 2 * 3.14);
	pincel.fill();
	console.log(`${x}, ${y}`);
}

tela.onclick = criaCirculo;
tela.oncontextmenu = trocaCor;
