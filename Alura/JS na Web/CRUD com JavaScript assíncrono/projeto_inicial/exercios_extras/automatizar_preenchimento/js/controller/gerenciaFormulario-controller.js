import { conectores } from '../service/fetch.js';

const inputDoCep = document.querySelector('#cep');
const rua = document.querySelector('#rua');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

const btnPesquisarCEP = document.querySelector('#btnPesquisar');
btnPesquisarCEP.addEventListener('click', async (event) => {
	event.preventDefault();

	const resultado = await conectores.capturaDados();
	if (resultado.erro || !resultado.ok) {
		alert('O CEP DIGITADO ESTÁ INVÁLIDO');
		throw new Error(`O CEP DIGITADO ESTÁ INVÁLIDO: ${resultado.erro}`);
	}
	atribuiCampos(resultado);
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

const atribuiCampos = (resultado) => {
	rua.value = resultado.logradouro;
	complemento.value = resultado.complemento;
	bairro.value = resultado.bairro;
	cidade.value = resultado.localidade;
	estado.value = resultado.uf;
};
