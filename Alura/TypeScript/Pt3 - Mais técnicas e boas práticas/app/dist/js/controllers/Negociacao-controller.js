var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._negociacoesServices = new NegociacoesServices();
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (this.ehDiaUtil(negociacao.data)) {
            this._negociacoes.adiciona(negociacao);
            imprimir(negociacao, this._negociacoes);
            this.atualizaView('Negociação adicionada com sucesso!');
            this.limparFormulario();
            return;
        }
        this._mensagemView.update('Apenas negociações em dias uteis são aceitas!');
    }
    importarDados() {
        this._negociacoesServices
            .obterNegociacoesDoDia()
            .then(negociacoesImportadasDeHoje => negociacoesImportadasDeHoje.filter(negociacoesImportadasDeHoje => !this._negociacoes
            .lista()
            .some(negociacao => negociacao.ehIgual(negociacoesImportadasDeHoje))))
            .then(negociacoesImportadasDeHoje => {
            negociacoesImportadasDeHoje.forEach(negociacao => {
                this._negociacoes.adiciona(negociacao);
            });
            this.atualizaView('Negociações importadas com sucesso!');
        });
    }
    ehDiaUtil(data) {
        const diaDaSemana = data.getDay();
        return (diaDaSemana > DiasDaSemana.DOMINGO && diaDaSemana < DiasDaSemana.SABADO);
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
    atualizaView(mensagem) {
        this._negociacoesView.update(this._negociacoes);
        if (mensagem)
            this._mensagemView.update(mensagem);
    }
}
__decorate([
    domInjector('#data')
], NegociaciacaoController.prototype, "_inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociaciacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociaciacaoController.prototype, "_inputValor", void 0);
__decorate([
    logarTempoExecucao(),
    inspect()
], NegociaciacaoController.prototype, "adiciona", null);
export default NegociaciacaoController;
//# sourceMappingURL=Negociacao-controller.js.map