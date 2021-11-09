import { Funcioario } from "./Funcionario.js";

export class Diretor extends Funcioario {
  constructor(nome, cpf, salario) {
    super(nome, cpf, salario);
    this.bonificacao = 2;
  }
}
