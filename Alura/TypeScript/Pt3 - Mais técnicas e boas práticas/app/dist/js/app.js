import NegociaciacaoController from './controllers/Negociacao-controller.js';
const controller = new NegociaciacaoController();
const form = document.querySelector('.form');
const btnImporta = document.querySelector('#botao-importa');
if (!form)
    throw Error('Não foi possível iniciar aplicação. Verifique se o elemento form existe');
if (!btnImporta) {
    throw Error('Botão "Importar" não foi encontrado.');
}
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
btnImporta.addEventListener('click', () => {
    controller.importarDados();
});
