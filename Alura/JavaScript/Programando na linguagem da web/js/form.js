const btnAdicionar = document.querySelector('#adicionar-paciente');

btnAdicionar.addEventListener('click', (e) => {
  e.preventDefault();

  const form = document.querySelector('#form-adiciona');

  const paciente = extraiValoresForm(form);

  const pacienteTr = montaTr(paciente);

  const tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);

  form.reset();
});

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
