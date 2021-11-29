const criaBotaoConclui = () => {
	const botaoConclui = document.createElement('button');

	botaoConclui.classList.add('check-button');
	botaoConclui.innerText = 'Concluír';

	botaoConclui.addEventListener('click', concluirTarefa);
	return botaoConclui;
};

const concluirTarefa = (evento) => {
	const botaoConclui = evento.target;

	const tarefaCompleta = botaoConclui.parentElement;

	tarefaCompleta.classList.toggle('done');
};

export default criaBotaoConclui;
