const inputDoCep = document.querySelector('#cep');
const rua = document.querySelector('#rua');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

const btnPesquisarCEP = document.querySelector('#btnPesquisar');
btnPesquisarCEP.addEventListener('click', (event) => {
	event.preventDefault();

	const valorDoCep = inputDoCep.value;
	const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			if (data.erro) {
				alert('O CEP DIGITADO ESTÁ INVÁLIDO');
				return;
			}
			atribuiCampos(data);
		});
});

const btnLimpar = document.querySelector('#btnLimpar');
btnLimpar.addEventListener('click', (event) => {
	event.preventDefault();

	inputDoCep.value = null;
	rua.value = null;
	complemento.value = null;
	bairro.value = null;
	cidade.value = null;
	estado.value = null;
});

const atribuiCampos = (data) => {
	rua.value = data.logradouro;
	complemento.value = data.complemento;
	bairro.value = data.bairro;
	cidade.value = data.localidade;
	estado.value = data.uf;
};
