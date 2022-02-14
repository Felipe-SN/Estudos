const listaTeclas = document.querySelectorAll('[data-btn]');
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
listaTeclas.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const tipoSom = e.target.dataset.btn;
    listaSons[tipoSom].play();
  });
});
*/
