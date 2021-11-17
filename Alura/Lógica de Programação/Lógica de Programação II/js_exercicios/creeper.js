var tela = document.querySelector(`canvas`);
var pincel = tela.getContext(`2d`);

pincel.fillStyle = `darkgreen`;
pincel.fillRect(tela.width / 2 - 175, tela.height / 2 - 150, 350, 300); // cabeça

pincel.fillStyle = `black`;
pincel.fillRect(tela.width / 2 - 125, tela.height / 2 - 90, 90, 90); //olho esquerdo
pincel.fillRect(tela.width / 2 + 35, tela.height / 2 - 90, 90, 90); //olho direito
pincel.fillRect(tela.width / 2 - 35, tela.height / 2, 70, 100); // nariz e boca
pincel.fillRect(tela.width / 2 - 70, tela.height / 2 + 50, 40, 100); //canto boxa esquerdo
pincel.fillRect(tela.width / 2 + 35, tela.height / 2 + 50, 40, 100); //canto boxa direito
