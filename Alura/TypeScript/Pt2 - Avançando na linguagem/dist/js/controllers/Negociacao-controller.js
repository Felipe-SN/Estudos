import { DiasDaSemana } from '../enums/dias-da-semana.js';
import Negociacao from '../models/Negociacao.js';
import Negociacoes from '../models/Negociacoes.js';
import MensagemView from '../views/Mensagem-view.js';
import NegociacoesView from '../views/Negociacoes-view.js';
class NegociaciacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView', true);
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (this.ehDiaUtil(negociacao.data)) {
            this._negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();
            return;
        }
        this._mensagemView.update('Apenas negociações em dias uteis são aceitas!');
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
    atualizaView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}
export default NegociaciacaoController;
