import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './BotaoConclui.js';
import BotaoDeleta from './BotaoDeleta.js';

export const handleNovoItem = (evento) => {
	evento.preventDefault();

	const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
	const input = document.querySelector('[data-form-input]');
	const valor = input.value;

	const calendario = document.querySelector('[data-form-date]');
	// eslint-disable-next-line no-undef
	const data = moment(calendario.value);
	const horario = data.format('HH:mm');
	const dataFormatada = data.format('DD/MM/YYYY');

	const concluido = false;

	const dados = {
		valor,
		dataFormatada,
		horario,
		concluido,
	};

	const tarefasAtualizadas = [...tarefas, dados];

	localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

	input.value = '';

	carregaTarefa();
};

export const Tarefa = ({ valor, horario, concluido }, id) => {
	const tarefa = document.createElement('li');
	const conteudo = `<p class="content">${horario} - ${valor}</p>`;

	if (concluido) {
		tarefa.classList.add('done');
	}

	tarefa.classList.add('task');

	tarefa.innerHTML = conteudo;

	tarefa.appendChild(BotaoConclui(carregaTarefa, id));
	tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

	return tarefa;
};
