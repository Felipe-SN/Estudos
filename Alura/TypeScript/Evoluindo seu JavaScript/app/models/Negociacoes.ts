import Negociacao from './Negociacao';

class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): Array<Negociacao> {
    return this.negociacoes;
  }
}

export default Negociacoes;
