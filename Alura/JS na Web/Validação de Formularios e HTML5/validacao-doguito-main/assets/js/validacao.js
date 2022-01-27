export const valida = (input) => {
	const tipoDeInput = input.dataset.tipo;

	if (validadores[tipoDeInput]) {
		validadores[tipoDeInput](input);
	}

	if (input.validity.valid) {
		input.parentElement.classList.remove('input-container--invalido');
		input.parentElement.querySelector('.input-mensagem-erro').innerText = '';
	} else {
		input.parentElement.classList.add('input-container--invalido');
		input.parentElement.querySelector('.input-mensagem-erro').innerText =
			mostraMensagemDeErro(tipoDeInput, input);
	}
};

const tiposDeErro = [
	'valueMissing',
	'typeMismatch',
	'patternMismatch',
	'customError',
];

const mensagensDeErro = {
	nome: {
		valueMissing: 'O campo nome não pode estar vazio.',
	},
	email: {
		valueMissing: 'O campo email não pode estar vazio.',
		typeMismatch: 'O email digitado não é valido.',
	},
	senha: {
		valueMissing: 'O campo senha não pode estar vazio.',
		patternMismatch:
			'A senha deve conter entre 6 e 12 caracteres, deve conter pelo menos uma letra minuscula, um numero e não deve conter símbolos.',
	},
	dataNascimento: {
		valueMissing: 'O campo data de nascimento não pode estar vazio.',
		customError: 'Você deve ser maior de 18 anos para se cadastrar.',
	},
};

const validadores = {
	dataNascimento: (input) => validaDataNascimento(input),
};

const mostraMensagemDeErro = (tipoDeInput, input) => {
	let mensagem = '';
	tiposDeErro.forEach((erro) => {
		if (input.validity[erro]) {
			mensagem = mensagensDeErro[tipoDeInput][erro];
		}
	});
	return mensagem;
};

const validaDataNascimento = (input) => {
	const dataRecebida = new Date(input.value);
	let mensagem = '';

	if (!maiorQue18(dataRecebida)) {
		mensagem = 'Você deve ser maior de 18 anos para se cadastrar.';
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
