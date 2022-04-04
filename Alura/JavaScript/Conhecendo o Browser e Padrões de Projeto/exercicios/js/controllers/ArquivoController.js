class ArquivoController {
  constructor() {
    this._inputDados = document.querySelector('.dados-arquivo');
  }

  envia() {
    //cria um Arquivo com as suas propriedades;
    const arquivo = this._criaArquivo();
    this._limpaFormulario();
    // exibe mensagem no console com os dados do arquivo.
    console.log(arquivo);
  }

  _criaArquivo() {
    return new Arquivo(...this._inputDados.value.toUpperCase().split('/'));
  }

  _limpaFormulario() {
    this._inputDados.value = '';
    this._inputDados.focus();
  }
}
