const campoFiltra = document.querySelector('#filtra-paciente');

campoFiltra.addEventListener('input', () => {
  pacientes.forEach((paciente) => {
    const tdNome = paciente.querySelector('.info-nome');
    const nome = tdNome.textContent;
    const regEx = new RegExp(campoFiltra.value, 'i');

    if (!regEx.test(nome) && campoFiltra.value.length > 0) {
      tdNome.parentNode.classList.add('invisivel');
      return;
    }
    tdNome.parentNode.classList.remove('invisivel');
  });
});
