export class Conta {
    constructor(saldoIni, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error(`Não é possivel efetuar esta operação\nO objeto "conta" não pode ser instanciado diretamente.\nEsta é uma classe abstrata!`);
        } else {
            this._saldo = saldoIni;
            this._cliente = cliente;
            this._agencia = agencia;
        };
    };
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        };
    };
    get cliente() {
        return this._cliente;
    };
    sacar(valor) {
        throw new Error(`O método sacar é abstrato!\nPor favor, sobrescreva este método!`);
        // let taxa = 1;
        // return this._sacar(valor, taxa);
    };
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        };
        return 0;
    };
    depositar(valor) {
        this._saldo += valor;
    };
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    };
};
