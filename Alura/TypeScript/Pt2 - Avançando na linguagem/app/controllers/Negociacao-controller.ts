import Negociacao from '../models/Negociacao.js';
import Negociacoes from '../models/Negociacoes.js';
import MensagemView from '../views/Mensagem-view.js';
import NegociacoesView from '../views/Negociacoes-view.js';

class NegociaciacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const regExp = /-/g;
    const date = new Date(this._inputData.value.replace(regExp, ','));
    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseFloat(this._inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  limparFormulario(): void {
    this._inputData.value = null;
    this._inputQuantidade.value = null;
    this._inputValor.value = null;
    this._inputData.focus();
  }
}

export default NegociaciacaoController;
