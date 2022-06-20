class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}

const dadosServidor = [
  [
    [new Date(), 1, 100],
    [new Date(), 2, 100],
  ],
  [
    [new Date(), 1, 150],
    [new Date(), 2, 300],
  ],
  [
    [new Date(), 3, 50],
    [new Date(), 1, 100],
  ],
];

const listaDeNegociacoes = dadosServidor
  .reduce((novoArray, array) => novoArray.concat(array), []) // novoArray receberá os itens de array, no final terá uma dimensão apenas
  .map(
    dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor)
  ); // para cada dado, cria uma instância de negociação. No final, teremos uma nova lista só com instâncias de Negociacao

console.log(listaDeNegociacoes);
