const listaClientes = async () => {
	const resposta = await fetch(`http://localhost:3000/profile`);
	if (resposta.ok) {
		return resposta.json();
	}
	throw new Error('Não foi possível listar os clientes!');

	// -------------------------------------------------
	// const promise = new Promise((resolve, reject) => {
	// 	const http = new XMLHttpRequest();
	// 	http.open('GET', 'http://localhost:3000/profile');

	// 	http.send();

	// 	http.onload = () => {
	// 		if (http.status >= 400) {
	// 			reject(JSON.parse(http.response));
	// 		} else {
	// 			resolve(JSON.parse(http.response));
	// 		}
	// 	};
	// });
	// return promise;
};

const criaCliente = async (nome, email) => {
	const resposta = await fetch(`http://localhost:3000/profile`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			nome: nome,
			email: email,
		}),
	});
	if (resposta.ok) {
		console.log(resposta);
		return resposta.body;
	}
	throw new Error('Não foi possível adicionar o novo cliente!');
};

const detalhaCliente = async (id) => {
	const resposta = await fetch(`http://localhost:3000/profile/${id}`);
	if (resposta.ok) {
		return resposta.json();
	}
	throw new Error('Não foi possível capturar os detalhes do cliente!');
};

const atualizaCliente = async (nome, email, id) => {
	const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			nome: nome,
			email: email,
		}),
	});
	if (resposta.ok) {
		return resposta.json();
	}
	throw new Error('Não foi possível alterar as informações do cliente!');
};

const removeCliente = async (id) => {
	const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
		method: 'DELETE',
	});
	if (!resposta.ok) {
		throw new Error('Não foi possível efetuar a exclusão do cliente!');
	}
};

export const clienteService = {
	listaClientes,
	criaCliente,
	removeCliente,
	detalhaCliente,
	atualizaCliente,
};
