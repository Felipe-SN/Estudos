import Negociacao from './Negociacao';

class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}

export default Negociacoes;
