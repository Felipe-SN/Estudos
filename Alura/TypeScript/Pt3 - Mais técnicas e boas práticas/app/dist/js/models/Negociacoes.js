class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    paraTexto() {
        return JSON.stringify(this._negociacoes, null, 2);
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    lista() {
        return this._negociacoes;
    }
    ehIgual(negociacoes) {
        return (JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.lista()));
    }
}
export default Negociacoes;
//# sourceMappingURL=Negociacoes.js.map