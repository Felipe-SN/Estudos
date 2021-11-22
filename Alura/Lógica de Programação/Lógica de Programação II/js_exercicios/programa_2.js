var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

function desenhaQuadrado(x, y, cor) {
	pincel.fillStyle = cor;
	pincel.fillRect(x, y, 50, 50);
	pincel.strokeStyle = `black`;
	pincel.strokeRect(x, y, 50, 50);
}

for (var x = 0; x < 600; x += 50) {
	desenhaQuadrado(x, 0, `green`);
}

// var x = 0;

// while (x < 600) {
// 	desenhaQuadrado(x, 0, `green`);
// 	x += 50;
// }

// desenhaQuadrado(0, 0, `green`);
// desenhaQuadrado(50, 0, `green`);
// desenhaQuadrado(100, 0, `green`);
