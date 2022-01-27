const validadores = {
	dataNascimento:input => validaDataNascimento(input)
}
export const valida = (input) => {
	const tipoDeInput = input.dataset.tipo

	if (validadores[tipoDeInput]) {
		validadores[tipoDeInput]
	}
}


const validaDataNascimento = (input) => {
	const dataRecebida = new Date(input.value);
	let mensagem = '';

	if (!maiorQue18(dataRecebida)) {
		mensagem = 'Você deve ser maior de 18 para se cadastrar';
	}

	input.setCustomValidity(mensagem);
};

const maiorQue18 = (data) => {
	const dataAtual = new Date();
	const dataMais18 = new Date(
		data.getUTCFullYear() + 18,
		data.getUTCMonth(),
		data.getUTCDate()
	);

	return dataMais18 <= dataAtual;
};
