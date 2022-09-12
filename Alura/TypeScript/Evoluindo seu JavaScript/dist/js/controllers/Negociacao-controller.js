import Negociacao from '../models/Negociacao.js';
import Negociacoes from '../models/Negociacoes.js';
class NegociaciacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const regExp = /-/g;
        const date = new Date(this._inputData.value.replace(regExp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this._inputData.value = null;
        this._inputQuantidade.value = null;
        this._inputValor.value = null;
        this._inputData.focus();
    }
}
export default NegociaciacaoController;
