const btnAdicionar = document.querySelector('#adicionar-paciente');

btnAdicionar.addEventListener('click', (e) => {
  e.preventDefault();

  const form = document.querySelector('#form-adiciona');

  const mensagensErro = document.querySelector('#mensagens-erro');

  const paciente = extraiValoresForm(form);

  const erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensErro(erros);
    return;
  }

  adicionaPacientesNaTabela(paciente);

  form.reset();
  mensagensErro.innerHTML = '';
});

const adicionaPacientesNaTabela = (paciente) => {
  const tabela = document.querySelector('#tabela-pacientes');
  const pacienteTr = montaTr(paciente);

  tabela.appendChild(pacienteTr);
};

const exibeMensagensErro = (erros) => {
  const ul = document.querySelector('#mensagens-erro');

  ul.innerHTML = '';

  erros.forEach((erro) => {
    const li = document.createElement('li');

    li.textContent = erro;
    ul.appendChild(li);
  });
};

const extraiValoresForm = (form) => {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
};

const montaTr = (paciente) => {
  const pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;
};

const montaTd = (dado, classe) => {
  const td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);

  return td;
};

const validaPaciente = (paciente) => {
  const erros = [];

  if (paciente.nome.length == 0) {
    erros.push('Nome do paciente invalido!');
  }

  if (!validaPeso(paciente.peso) && paciente.peso.length == 0) {
    erros.push('Peso Invalido!');
  }

  if (!validaAltura(paciente.altura) && paciente.altura.length == 0) {
    erros.push('Altura Invalida!');
  }

  if (paciente.gordura.length == 0) {
    erros.push('Índice de gordura invalido!');
  }

  return erros;
};
