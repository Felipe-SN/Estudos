const capturaDados = async () => {
	const inputDoCep = document.getElementById('cep');
	const valorDoCep = inputDoCep.value;
	const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

	const resposta = await fetch(url);
	return resposta.json();
};

export const conectores = {
	capturaDados,
};
