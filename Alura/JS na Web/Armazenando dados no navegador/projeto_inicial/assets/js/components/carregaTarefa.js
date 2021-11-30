import { Tarefa } from './criaTarefa.js';

export const carregaTarefa = () => {
	const lista = document.querySelector('[data-list]');
	const tarefaCadastrada = JSON.parse(localStorage.getItem('tarefas')) || [];

	lista.innerHTML = '';
	tarefaCadastrada.forEach((tarefa) => {
		lista.appendChild(Tarefa(tarefa));
	});
};
