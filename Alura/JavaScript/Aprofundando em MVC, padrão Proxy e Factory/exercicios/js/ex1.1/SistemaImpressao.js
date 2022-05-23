class SistemaImpressao {
  constructor() {
    this._codigo = 2;
  }

  imprime(nomes) {
    nomes.forEach(nome => {
      console.log(this);
      console.log(`${this._codigo}: ${nome}`);
    });
  }
}

let nomes = ['Flávio', 'Nico', 'Douglas'];
let si = new SistemaImpressao();
si.imprime(nomes);
