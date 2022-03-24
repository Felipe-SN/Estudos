const titulo = document.querySelector('.titulo');

const pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  const tdAltura = paciente.querySelector('.info-altura');
  const altura = tdAltura.textContent;

  const tdPeso = paciente.querySelector('.info-peso');
  const peso = tdPeso.textContent;

  const tdImc = paciente.querySelector('.info-imc');
  const imc = peso / (altura * altura);

  let pesoValido = true;
  let alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso invalido');
    pesoValido = false;
    tdPeso.textContent = 'Peso Invalido!';
  }

  if (altura <= 0 || altura >= 4) {
    console.log('Altura invalido');
    alturaValida = false;
    tdAltura.textContent = 'Altura Invalida!';
  }

  if (pesoValido && alturaValida) {
    tdImc.textContent = imc.toFixed(2);
  }
}
