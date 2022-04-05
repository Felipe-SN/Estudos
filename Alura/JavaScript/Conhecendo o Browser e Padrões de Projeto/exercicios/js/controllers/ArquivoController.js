class ArquivoController {
  constructor() {
    this._inputDados = document.querySelector('.dados-arquivo');
  }

  envia() {
    //cria um Arquivo com as suas propriedades;
    const arquivo = ArquivoHelper.cria(this._inputDados.value);
    // exibe mensagem no console com os dados do arquivo.
    console.log(
      `Dados do arquivo:\n- Nome: ${arquivo.nome}\n- Tamanho: ${arquivo.tamanho}\n- Tipo: ${arquivo.tipo}`
    );

    this._limpaFormulario();
  }

  _limpaFormulario() {
    this._inputDados.value = '';
    this._inputDados.focus();
  }
}
