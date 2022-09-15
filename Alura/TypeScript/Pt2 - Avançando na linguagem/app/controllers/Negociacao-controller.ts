import { DiasDaSemana } from '../enums/dias-da-semana.js';
import Negociacao from '../models/Negociacao.js';
import Negociacoes from '../models/Negociacoes.js';
import MensagemView from '../views/Mensagem-view.js';
import NegociacoesView from '../views/Negociacoes-view.js';

class NegociaciacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView', true);
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    if (this.ehDiaUtil(negociacao.data)) {
      this._negociacoes.adiciona(negociacao);
      this.atualizaView();
      this.limparFormulario();
      return;
    }
    this._mensagemView.update('Apenas negociações em dias uteis são aceitas!');
  }

  private ehDiaUtil(data: Date): boolean {
    const diaDaSemana = data.getDay();
    return (
      diaDaSemana > DiasDaSemana.DOMINGO && diaDaSemana < DiasDaSemana.SABADO
    );
  }

  private limparFormulario(): void {
    this._inputData.value = null;
    this._inputQuantidade.value = null;
    this._inputValor.value = null;
    this._inputData.focus();
  }

  private atualizaView(): void {
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }
}

export default NegociaciacaoController;
