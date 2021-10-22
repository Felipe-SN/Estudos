import { Cliente } from "./Cliente.js";

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('Não é possivel efetuar esta operação\nNão é permitido instanciar o objeto "Conta" diretamente')
        } else {
            this._saldo = saldoInicial;
            this._cliente = cliente;
            this._agencia = agencia;
            console.log(this.constructor);
        };

    };

    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
            this._cliente = novoValor;
    };

    get cliente() {
        return this._cliente
    };

    get saldo() {
        return this._saldo
    };

    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    };

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        };
    };

    depositar(valor) {
        if (valor <= 0) {
            return
        };

        this._saldo += valor;
    };

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
};