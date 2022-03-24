import { Funcioario } from "./Funcionario.js";

export class Gerente extends Funcioario {
  constructor(nome, cpf, salario) {
    super(nome, cpf, salario);
    this.bonificacao = 1.1;
  }
}
