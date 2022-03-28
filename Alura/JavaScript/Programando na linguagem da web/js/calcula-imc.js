const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

const pacientes = document.querySelectorAll('.paciente');

const calculaImc = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
};

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  const tdAltura = paciente.querySelector('.info-altura');
  const altura = tdAltura.textContent;

  const tdPeso = paciente.querySelector('.info-peso');
  const peso = tdPeso.textContent;

  const tdImc = paciente.querySelector('.info-imc');

  let pesoValido = true;
  let alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso invalido');
    pesoValido = false;
    tdPeso.textContent = 'Peso Invalido!';
    paciente.classList.add('paciente-invalido');
  }

  if (altura <= 0 || altura >= 4) {
    console.log('Altura invalido');
    alturaValida = false;
    tdAltura.textContent = 'Altura Invalida!';
    paciente.classList.add('paciente-invalido');
  }

  if (pesoValido && alturaValida) {
    const imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
