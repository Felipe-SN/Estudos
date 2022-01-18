import { clienteService } from '../service/cliente-service.js';

(async () => {
	const capturaURL = new URL(window.location);

	const id = capturaURL.searchParams.get('id');

	const inputNome = document.querySelector('[data-nome]');
	const inputEmail = document.querySelector('[data-email]');

	try {
		const dados = await clienteService.detalhaCliente(id);
		inputNome.value = dados.nome;
		inputEmail.value = dados.email;
	} catch (erro) {
		console.log(erro);
		window.location.href = '../telas/erro.html';
	}

	const formulario = document.querySelector('[data-form]');

	formulario.addEventListener('submit', async (evento) => {
		evento.preventDefault();

		try {
			await clienteService.atualizaCliente(
				inputNome.value,
				inputEmail.value,
				id
			);
			window.location.href = '../telas/edicao_concluida.html';
		} catch (erro) {
			console.log(erro);
			window.location.href = '../telas/erro.html';
		}
	});
})();
