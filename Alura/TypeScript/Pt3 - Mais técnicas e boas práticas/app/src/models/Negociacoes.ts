import Modelo from '../interfaces/modelo.js';
import Negociacao from './Negociacao.js';

class Negociacoes implements Modelo<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  paraTexto(): string {
    return JSON.stringify(this._negociacoes, null, 2);
  }

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this._negociacoes;
  }

  ehIgual(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.lista())
    );
  }
}

export default Negociacoes;
