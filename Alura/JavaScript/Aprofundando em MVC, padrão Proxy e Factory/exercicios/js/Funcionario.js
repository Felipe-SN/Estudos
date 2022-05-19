const tabela = document.getElementById('corpoTabela');

let funcionarios = [
  {
    nome: 'Douglas',
    endereco: 'Rua da esquina, 123',
    salario: '4500',
  },
  {
    nome: 'Felipe',
    endereco: 'Rua da virada, 456',
    salario: '5000',
  },
  {
    nome: 'Silvio',
    endereco: 'Rua da aresta, 789',
    salario: '6000',
  },
];

const dados = funcionarios
  .map(
    f => `
  <tr>
    <td>${f.nome}</td>
    <td>${f.endereco}</td>
    <td>${f.salario}</td>
  </tr>
  `
  )
  .join('');

tabela.innerHTML = dados;
