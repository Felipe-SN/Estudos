var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

var serie2015 = [50, 25, 20, 5];
var serie2016 = [65, 20, 13, 2];
var cores = [`blue`, `green`, `yellow`, `red`];

function desenhaRetangulo(posX, posY, larg, alt, cor) {
	pincel.fillStyle = cor;
	pincel.fillRect(posX, posY, larg, alt);
	pincel.strokeStyle = `black`;
	pincel.strokeRect(posX, posY, larg, alt);
}

function desenhaTexto(posX, posY, texto) {
	pincel.font = `15px Georgia`;
	pincel.fillStyle = `black`;
	pincel.fillText(texto, posX, posY);
}

function desenhaBarra(posX, posY, serie, cores, texto) {
	desenhaTexto(posX, posY - posY / 4, texto);
	for (var i = 0; i < serie.length; i++) {
		desenhaRetangulo(posX, posY, 50, serie[i], cores[i]);
		posY = posY + serie[i];
	}
}

desenhaBarra(50, 50, serie2015, cores, `2015`);
desenhaBarra(150, 50, serie2016, cores, `2016`);
