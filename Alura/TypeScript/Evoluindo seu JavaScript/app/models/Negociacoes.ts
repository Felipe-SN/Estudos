import Negociacao from './Negociacao';

class Negociacoes {
  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this._negociacoes;
  }
}

export default Negociacoes;
