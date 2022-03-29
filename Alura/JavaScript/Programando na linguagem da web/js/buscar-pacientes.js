const btnBuscar = document.querySelector('#buscar-pacientes');

btnBuscar.addEventListener('click', () => {
  // ('https://api-pacientes.herokuapp.com/pacientes');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', () => {
    const erroAjax = document.querySelector('#erro-ajax');

    if (xhr.status == 200) {
      const resposta = xhr.responseText;
      const pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        adicionaPacientesNaTabela(paciente);
      });

      erroAjax.classList.add('invisivel');

      return;
    }

    erroAjax.classList.remove('invisivel');
  });

  xhr.send();
});
