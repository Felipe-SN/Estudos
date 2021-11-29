import criaBotaoConclui from './components/BotaoConclui.js';
import criaBotaoDeleta from './components/BotaoDeleta.js';

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
	tarefa.appendChild(criaBotaoDeleta());
	lista.appendChild(tarefa);
	input.value = '';
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criaTarefa);
