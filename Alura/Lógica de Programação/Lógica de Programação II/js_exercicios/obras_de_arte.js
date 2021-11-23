function desenhaQuadrado(x, y, tamanho, cor) {
	pincel.fillStyle = cor;
	pincel.fillRect(x, y, tamanho, tamanho);
	pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {
	pincel.fillStyle = cor;
	pincel.beginPath();
	pincel.arc(x, y, raio, 0, 2 * Math.PI);
	pincel.fill();
}

function desenhaPaletaDeCores() {
	desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, "red");
	desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, "green");
	desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, "blue");
}

function escolheCor(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;

	if (x < xVerde && x > xVermelho && y < tamanhoQuadrados) {
		corAtual = "red";
	} else if (x > xVerde && x < xAzul && y < tamanhoQuadrados) {
		corAtual = "green";
	} else if (x > xAzul && x < xAzul + xVerde && y < tamanhoQuadrados) {
		corAtual = "blue";
	}
}

function lidaComMovimentoDoMouse(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;

	if (x >= 0 && x < 3 * tamanhoQuadrados && y >= 0 && y < tamanhoQuadrados) {
		desenha = false;
	}

	if (desenha) {
		desenhaCirculo(x, y, 5, corAtual);
	}
}

function habilitaDesenhar() {
	desenha = true;
}

function desabilitaDesenhar() {
	desenha = false;
}

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

var desenha = false;
var corAtual = "blue";
var xVermelho = 0;
var xVerde = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;

tela.onclick = escolheCor;
