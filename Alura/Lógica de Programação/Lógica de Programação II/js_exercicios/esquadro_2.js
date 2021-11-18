var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

function desenhaEsquadro(xA, yA, xC, yC, cor) {
	pincel.fillStyle = cor;
	pincel.beginPath();
	pincel.moveTo(xA, yA);
	pincel.lineTo(xA, yC);
	pincel.lineTo(xC, yC);
	pincel.fill();

	pincel.fillStyle = `white`;
	pincel.beginPath();
	pincel.moveTo(Math.round(xA / 0.5), Math.round(yA / 0.2857));
	pincel.lineTo(Math.round(xA / 0.5),  Math.round(yC / 1.1428));
	pincel.lineTo(Math.round(xC / 1.4545), Math.round(yC / 1.1428));
	pincel.fill();
}

desenhaEsquadro(50, 50, 400, 400, `black`);
