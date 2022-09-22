import domInjector from '../decorators/dom-injector.js';
import inspect from '../decorators/inspect.js';
import logarTempoExecucao from '../decorators/logar-tempo-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import Negociacao from '../models/Negociacao.js';
import Negociacoes from '../models/Negociacoes.js';
import NegociacoesServices from '../services/negociacoes-services.js';
import MensagemView from '../views/Mensagem-view.js';
import NegociacoesView from '../views/Negociacoes-view.js';

class NegociaciacaoController {
  @domInjector('#data')
  private _inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private _inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');
  private _negociacoesServices = new NegociacoesServices();

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  @logarTempoExecucao()
  @inspect()
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

  importarDados(): void {
    this._negociacoesServices
      .obterNegociacoesDoDia()
      .then(negociacoesImportadas => {
        negociacoesImportadas.forEach(negociacao => {
          this._negociacoes.adiciona(negociacao);
        });
        this._negociacoesView.update(this._negociacoes);
      });
  }

  private ehDiaUtil(data: Date): boolean {
    const diaDaSemana = data.getDay();
    return (
      diaDaSemana > DiasDaSemana.DOMINGO && diaDaSemana < DiasDaSemana.SABADO
    );
  }

  private limparFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';
    this._inputData.focus();
  }

  private atualizaView(): void {
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }
}

export default NegociaciacaoController;
