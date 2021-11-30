import { Tarefa } from './criaTarefa.js';

export const criaData = (data) => {
	const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
	// eslint-disable-next-line no-undef
	const dataMoment = moment(data, 'DD/MM/YYYY');
	const dataTopo = document.createElement('li');
	const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`;

	dataTopo.innerHTML = conteudo;

	tarefas.forEach((tarefa, id) => {
		// eslint-disable-next-line no-undef
		const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');
		const diff = dataMoment.diff(dia);

		if (diff === 0) {
			dataTopo.appendChild(Tarefa(tarefa, id));
		}
	});

	return dataTopo;
};
