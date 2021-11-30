import { ordenaDatas, removeDatasRepetidas } from '../services/data.js';
import { criaData } from './criaData.js';

export const carregaTarefa = () => {
	const lista = document.querySelector('[data-list]');
	const tarefaCadastrada = JSON.parse(localStorage.getItem('tarefas')) || [];

	lista.innerHTML = '';
	const datasUnicas = removeDatasRepetidas(tarefaCadastrada);
	ordenaDatas(datasUnicas);
	datasUnicas.forEach((tarefa) => {
		lista.appendChild(criaData(tarefa));
	});
};
