const listaTeclas = document.querySelectorAll('[data-tecla]');
const listaSons = document.querySelectorAll('[data-som]');

const tocaSom = (idAudio) => {
  const elemento = document.querySelector(idAudio);
  const tagValida = elemento.localName === 'audio';

  if (elemento && tagValida) {
    elemento.play();
    return;
  }
  console.log('Elemento não encontrado ou seletor inválido!');
};

for (let contador = 0; contador < listaTeclas.length; contador++) {
  const tecla = listaTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  tecla.onkeydown = (evento) => {
    const code = evento.code;
    const liberados = {
      Space: 'Space',
      Enter: 'Enter',
    };
    if (code === liberados[code]) {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove('ativa');
  };
}
