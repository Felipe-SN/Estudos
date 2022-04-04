/*
const campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
];

const tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  const tr = document.createElement('tr');

  campos.forEach((campo) => {
    const td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  const tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  campos[0].focus();
});

----------------------------------------------------------------------------

class Codigo {
  constructor(texto) {
    if (!this._valida(texto))
    throw new Error(`O texto ${texto} não é um código válido`);
    this._texto = texto;
  }
  
  _valida(texto) {
    return /\D{3}-\D{2}-\d{2}/.test(texto);
  }
  
  get texto() {
    return this._texto;
  }
}

let codigo1 = new Codigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new Codigo('1X1-JJ-12'); // inválido
console.log(codigo2.texto);

----------------------------------------------------------------------------

function exibeNoConsole(lista) {
  lista.forEach((item) => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Rômulo'));

----------------------------------------------------------------------------
*/
