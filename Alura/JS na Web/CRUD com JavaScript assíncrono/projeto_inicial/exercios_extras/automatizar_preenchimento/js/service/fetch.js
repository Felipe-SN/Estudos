const capturaDados = async () => {
	const cep = document.getElementById('cep');
	const valorDoCep = cep.value;
	const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

	const resposta = await fetch(url);
	return resposta.json();
};

export const conectores = {
	capturaDados,
};
