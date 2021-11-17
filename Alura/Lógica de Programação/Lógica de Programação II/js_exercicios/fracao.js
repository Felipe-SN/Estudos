var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

function desenhaQuadrado(posX, posY, tamanho, cor) {
	for (let i = 0; i < 4; i++) {
		if (i < 3) {
			pincel.fillStyle = cor;
			pincel.fillRect(posX, posY, tamanho, tamanho);
			pincel.strokeRect(posX, posY, tamanho, tamanho);
			posX += tamanho;
		} else {
			pincel.fillStyle = `white`;
			pincel.fillRect(posX, posY, tamanho, tamanho);
			pincel.strokeRect(posX, posY, tamanho, tamanho);
			posX += tamanho;
		}
	}
}

function desenhaTexto(texto, tamanho, posX, posY) {
	pincel.font = `${tamanho}px Georgia`;
	pincel.fillStyle = `black`;
	pincel.fillText(texto, posX, posY);
}

const tamanho = 20;
const espaco = tamanho + 30;
const posXInicio = 50;

desenhaTexto(`Qual é a fração?`, tamanho, posXInicio, tamanho + 10)
desenhaQuadrado(posXInicio, espaco, tamanho * 5, `green`);
