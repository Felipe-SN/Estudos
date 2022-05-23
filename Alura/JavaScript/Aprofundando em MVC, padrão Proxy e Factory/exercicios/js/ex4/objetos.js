let objeto1 = {
  nome: 'Bob',
};

let objeto2 = {
  nome: 'Leo',
};

// function exibeNome() {
//   alert(this.nome);
// }

function exibeNome(prefixo, sufixo) {
  alert(prefixo + this.nome + sufixo);
}

Reflect.apply(exibeNome, objeto1, ['(', ')']);
Reflect.apply(exibeNome, objeto2, ['(', ')']);
