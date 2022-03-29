const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

const pacientes = document.querySelectorAll('.paciente');

const validaPeso = (peso) => {
  if (peso >= 0 && peso < 1000) {
    return true;
  }
  return false;
};

const validaAltura = (altura) => {
  if (altura >= 0 && altura <= 3.3) {
    return true;
  }
  return false;
};

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

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log('Peso invalido');
    peso = 'Peso Invalido!';
    paciente.classList.add('paciente-invalido');
  }

  if (!alturaValida) {
    console.log('Altura invalido');
    altura = 'Altura Invalida!';
    paciente.classList.add('paciente-invalido');
  }

  if (pesoValido && alturaValida) {
    const imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
