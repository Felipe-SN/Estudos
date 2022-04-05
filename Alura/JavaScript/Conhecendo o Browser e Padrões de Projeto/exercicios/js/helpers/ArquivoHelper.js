class ArquivoHelper {
  constructor() {
    throw new Error('Esta classe não deve ser instanciada!');
  }
  static cria(dados) {
    return new Arquivo(...dados.toUpperCase().split('/'));
  }
}
