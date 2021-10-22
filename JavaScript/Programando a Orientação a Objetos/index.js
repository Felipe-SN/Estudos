import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Felipe', 11122233304);

const conta = new Conta(5000, cliente1, 1001);

const contaCorrente1 = new ContaCorrente(0, cliente1, 1001);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001)

console.log(contaPoupanca1);
console.log(contaCorrente1);
console.log(conta);
