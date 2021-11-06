import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente(`José`, 11122233344);
// const contaCorrente1 = new ContaCorrente(cliente1, 1001);
// contaCorrente1.depositar(500);
// contaCorrente1.sacar(400);
// const contaPoupanca1 = new ContaPoupanca(100, cliente1, 1001);
// contaPoupanca1.depositar(5000);
// contaPoupanca1.transferir(500, contaCorrente1)
// const contaSalario1 = new ContaSalario(cliente1);
// contaSalario1.depositar(1170);
// contaSalario1.sacar(600);

// console.log(cliente1);
// console.log(contaCorrente1);
// console.log(contaPoupanca1);
// console.log(contaSalario1);

const cliente2 = new Cliente(`João`, 33344455566,`456`);
const diretor1 = new Diretor(`José`, 11122233344, 10000);
diretor1.cadastrarSenha(`123456`);
const gerente1 = new Gerente(`Helias`, 22233344455, 5000);
gerente1.cadastrarSenha(`123`);

const estaLogado1 = SistemaAutenticacao.login(diretor1, `123456`);
const estaLogado2 = SistemaAutenticacao.login(gerente1, `123`);
const estaLogado3 = SistemaAutenticacao.login(cliente2, `456`);

console.log(`${estaLogado1}\n${estaLogado2}\n${estaLogado3}`);