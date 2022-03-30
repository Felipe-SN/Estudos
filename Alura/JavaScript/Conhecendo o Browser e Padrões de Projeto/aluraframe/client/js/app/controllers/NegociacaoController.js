class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    const data = new Date(
      ...this._inputData.value
        .split('-')
        .map((item, indice) => item - (indice % 2))
    );

    console.log(data);

    const negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);
  }
}
