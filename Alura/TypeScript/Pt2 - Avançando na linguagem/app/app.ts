import NegociaciacaoController from './controllers/Negociacao-controller.js';

const controller = new NegociaciacaoController();
const form = document.querySelector('.form');

if (!form)
  throw Error(
    'Não foi possível iniciar aplicação. Verifique se o elemento form existe'
  );

form.addEventListener('submit', event => {
  event.preventDefault();
  controller.adiciona();
});
