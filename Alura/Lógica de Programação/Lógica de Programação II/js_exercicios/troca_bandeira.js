var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

function criaBandeiraBrasil() {
	pincel.fillStyle = `green`;
	pincel.fillRect(0, 0, tela.width, tela.height);

	pincel.fillStyle = `yellow`;
	pincel.beginPath();
	pincel.moveTo(tela.width / 2, 50);
	pincel.lineTo(50, tela.height / 2);
	pincel.lineTo(tela.width / 2, tela.height - 50);
	pincel.lineTo(tela.width - 50, tela.height / 2);
	pincel.fill();

	pincel.fillStyle = `darkblue`;
	pincel.beginPath();
	pincel.arc(tela.width / 2, tela.height / 2, 100, 0, 2 * 3.14);
	pincel.fill();
}

function criaBandeiraAlemanha() {
	pincel.fillStyle = `black`;
	pincel.fillRect(0, 0, tela.width, tela.height / 3);

	pincel.fillStyle = `red`;
	pincel.fillRect(0, tela.height / 3, tela.width, tela.height / 3);

	pincel.fillStyle = `yellow`;
	pincel.fillRect(0, tela.height / 1.5, tela.width, tela.height / 3);
}

var mostraBrasil = true;

function trocaBandeira() {
	if (mostraBrasil) {
		criaBandeiraBrasil();
	} else {
		criaBandeiraAlemanha();
	}
	mostraBrasil = !mostraBrasil;
}

setInterval(trocaBandeira, 3000);
