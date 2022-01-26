import { conectores } from '../service/fetch.js';

const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const complemento = document.getElementById('complemento');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

cep.focus();
cep.oninput = () => {
	cep.value = cep.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
};

const btnPesquisar = document.getElementById('btnPesquisar');
btnPesquisar.addEventListener('click', async (event) => {
	event.preventDefault();

	const resultado = await conectores.capturaDados();
	if (resultado.erro) {
		alert('O CEP DIGITADO ESTÁ INVÁLIDO');
		throw new Error(`O CEP DIGITADO ESTÁ INVÁLIDO: ${resultado.erro}`);
	}

	preencheCampos(resultado);
});

const preencheCampos = (resultado) => {
	rua.value = resultado.logradouro;
	complemento.value = resultado.complemento;
	bairro.value = resultado.bairro;
	cidade.value = resultado.localidade;
	estado.value = resultado.uf;
	cep.focus();
};

const btnLimpar = document.getElementById('btnLimpar');
btnLimpar.addEventListener('click', (event) => {
	event.preventDefault();

	cep.value = null;
	rua.value = null;
	complemento.value = null;
	bairro.value = null;
	cidade.value = null;
	estado.value = null;
	cep.focus();
});
