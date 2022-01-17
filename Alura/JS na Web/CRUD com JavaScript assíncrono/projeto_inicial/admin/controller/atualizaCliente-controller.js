import { clienteService } from '../service/cliente-service.js';

const capturaURL = new URL(window.location);

const id = capturaURL.searchParams.get('id');
console.log(capturaURL);

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

clienteService.detalhaCliente(id).then((dados) => {
	inputNome.value = dados.nome;
	inputEmail.value = dados.email;
});

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
	evento.preventDefault();

	clienteService.atualizaCliente(inputNome.value, inputEmail.value, id).then(()=> {
		window.location.href = "../telas/edicao_concluida.html"
	})
});
