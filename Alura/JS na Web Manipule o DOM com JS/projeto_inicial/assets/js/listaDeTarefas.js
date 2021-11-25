const criaTarefa = (evento) => {
	evento.preventDefault();

	const lista = document.querySelector('[data-list]');
	const input = document.querySelector('[data-form-input]');
	const valor = input.value;

	const tarefa = document.createElement('li');
	tarefa.classList.add('task');
	const conteudo = `<p class="content">${valor}</p>`;

	tarefa.innerHTML = conteudo;

	tarefa.appendChild(criaBotaoConclui());
	lista.appendChild(tarefa);
	input.value = '';
};

const criaBotaoConclui = () => {
	const botaoConclui = document.createElement('button');

	botaoConclui.classList.add('check-button');
	botaoConclui.innerText = 'Concluír';

	botaoConclui.addEventListener('click', concluirTarefa);
	return botaoConclui;
};

const concluirTarefa = (evento) => {
	const botaoConclui = evento.target;
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criaTarefa);
