import NegociaciacaoController from './controllers/Negociacao-controller.js';
const controller = new NegociaciacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
