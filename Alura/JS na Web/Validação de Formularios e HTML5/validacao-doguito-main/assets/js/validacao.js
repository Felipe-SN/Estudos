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
	cpf: {
		valueMissing: 'O campo CPF não pode estar vazio.',
		customError: 'O CPF digitado não é valido.',
	},
};

const validadores = {
	dataNascimento: (input) => validaDataNascimento(input),
	cpf: (input) => validaCPF(input),
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

const validaCPF = (input) => {
	const cpfFormatado = input.value.replace(/\D/g, '');
	let mensagem = '';

	if (!verificaCPFRepetido(cpfFormatado) || !validaEstruturaCPF(cpfFormatado)) {
		mensagem = 'O CPF digitado não é valido.';
	}

	input.setCustomValidity(mensagem);
};

const verificaCPFRepetido = (cpf) => {
	const valoresRepetidos = [
		'00000000000',
		'11111111111',
		'22222222222',
		'33333333333',
		'44444444444',
		'55555555555',
		'66666666666',
		'77777777777',
		'88888888888',
		'99999999999',
	];

	let cpfValido = true;

	valoresRepetidos.forEach((valor) => {
		if (valor == cpf) {
			cpfValido = false;
		}
	});

	return cpfValido;
};

const validaEstruturaCPF = (cpf) => {
	const multiplicador = 10;

	return validaDigitoVerificador(cpf, multiplicador);
};

const validaDigitoVerificador = (cpf, multiplicador) => {
	if (multiplicador >= 12) {
		return true;
	}

	let multiplicadorInicial = multiplicador;
	let soma = 0;
	const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('');
	const digitoVerificador = cpf.charAt(multiplicador - 1);
	for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
		soma = soma + cpfSemDigitos[contador] * multiplicadorInicial;
		contador++;
	}

	if (digitoVerificador == confirmaDigito(soma)) {
		return validaDigitoVerificador(cpf, multiplicador + 1);
	}

	return false;
};

const confirmaDigito = (soma) => {
	return 11 - (soma % 11);
};
