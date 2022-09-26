import domInjector from '../decorators/dom-injector.js';
import inspect from '../decorators/inspect.js';
import logarTempoExecucao from '../decorators/logar-tempo-execucao.js';
import DiasDaSemana from '../enums/dias-da-semana.js';
import Negociacao from '../models/Negociacao.js';
import Negociacoes from '../models/Negociacoes.js';
import NegociacoesServices from '../services/negociacoes-services.js';
import imprimir from '../utils/imprimir.js';
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
      imprimir(negociacao, this._negociacoes);
      this.atualizaView('Negociação adicionada com sucesso!');
      this.limparFormulario();
      return;
    }
    this._mensagemView.update('Apenas negociações em dias uteis são aceitas!');
  }

  importarDados(): void {
    this._negociacoesServices
      .obterNegociacoesDoDia()
      .then(negociacoesImportadasDeHoje =>
        negociacoesImportadasDeHoje.filter(
          negociacoesImportadasDeHoje =>
            !this._negociacoes
              .lista()
              .some(negociacao =>
                negociacao.ehIgual(negociacoesImportadasDeHoje)
              )
        )
      )
      .then(negociacoesImportadasDeHoje => {
        negociacoesImportadasDeHoje.forEach(negociacao => {
          this._negociacoes.adiciona(negociacao);
        });
        this.atualizaView('Negociações importadas com sucesso!');
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

  private atualizaView(mensagem?: string): void {
    this._negociacoesView.update(this._negociacoes);
    if (mensagem) this._mensagemView.update(mensagem);
  }
}

export default NegociaciacaoController;
