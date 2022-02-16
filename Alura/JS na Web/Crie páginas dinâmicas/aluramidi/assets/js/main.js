const listaTeclas = document.querySelectorAll('[data-tecla]');
const listaSons = document.querySelectorAll('[data-som]');

const tocaSom = (idAudio) => {
  document.querySelector(idAudio).play();
};

for (let contador = 0; contador < listaTeclas.length; contador++) {
  const tecla = listaTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };
}

/*
listaTeclas.forEach((tecla) => {
  tecla.addEventListener('click', (e) => {
    const tipoSom = e.target.dataset.tecla;
    listaSons[tipoSom].play();
  });
});
*/
