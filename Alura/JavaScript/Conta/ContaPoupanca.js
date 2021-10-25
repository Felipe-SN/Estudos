import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoIni, cliente, agencia) {
        super(saldoIni, cliente, agencia)
    };
    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    };
};