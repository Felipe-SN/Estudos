import criaBotaoConclui from './components/BotaoConclui.js';
import criaBotaoDeleta from './components/BotaoDeleta.js';

const handleNovoItem = (evento) => {
	evento.preventDefault();

	const lista = document.querySelector('[data-list]');
	const input = document.querySelector('[data-form-input]');
	const valor = input.value;

	const calendario = document.querySelector('[data-form-date]');
	const data = moment(calendario.value);

	const dataFormatada = data.format('DD/MM/YYYY');

	const dados = { valor, dataFormatada };

	const tarefa = criaTarefa(dados);

	lista.appendChild(tarefa);
	input.value = '';
};

const criaTarefa = ({ valor, dataFormatada }) => {
	const tarefa = document.createElement('li');
	tarefa.classList.add('task');
	const conteudo = `<p class="content">${dataFormatada} - ${valor}</p>`;

	tarefa.innerHTML = conteudo;

	tarefa.appendChild(criaBotaoConclui());
	tarefa.appendChild(criaBotaoDeleta());

	return tarefa;
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);
