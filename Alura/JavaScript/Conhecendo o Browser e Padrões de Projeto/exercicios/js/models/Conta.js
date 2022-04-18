class Conta {
  constructor(saldo) {
    this._saldo = saldo;
  }

  get saldo() {
    const saldo = this._saldo;
    return saldo;
  }

  atualiza(taxa) {
    throw new Error('O método "atualiza" deve ser implementado.');
  }
}
