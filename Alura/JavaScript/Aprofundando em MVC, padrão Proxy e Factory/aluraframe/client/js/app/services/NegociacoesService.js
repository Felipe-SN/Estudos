class NegociacoesService {
  constructor() {
    this._http = new HttpService();
  }
  obterNegociacoesDaSemana() {
    const url = 'negociacoes/semana';

    return this._http
      .get(url)
      .then(negociacoes => {
        return negociacoes.map(
          objeto =>
            new Negociacao(
              new Date(objeto.data),
              objeto.quantidade,
              objeto.valor
            )
        );
      })
      .catch(erro => {
        console.log(erro);
        throw new Error(`Não foi possível importar de ${url}`);
      });
  }

  obterNegociacoesDaSemanaAnterior() {
    const url = 'negociacoes/anterior';

    return this._http
      .get(url)
      .then(negociacoes => {
        return negociacoes.map(
          objeto =>
            new Negociacao(
              new Date(objeto.data),
              objeto.quantidade,
              objeto.valor
            )
        );
      })
      .catch(erro => {
        console.log(erro);
        throw new Error(`Não foi possível importar de ${url}`);
      });
  }

  obterNegociacoesDaSemanaRetrasada() {
    const url = 'negociacoes/retrasada';

    return this._http
      .get(url)
      .then(negociacoes => {
        return negociacoes.map(
          objeto =>
            new Negociacao(
              new Date(objeto.data),
              objeto.quantidade,
              objeto.valor
            )
        );
      })
      .catch(erro => {
        console.log(erro);
        throw new Error(`Não foi possível importar de ${url}`);
      });
  }

  obterNegociacoes() {
    return Promise.all([
      this.obterNegociacoesDaSemana(),
      this.obterNegociacoesDaSemanaAnterior(),
      this.obterNegociacoesDaSemanaRetrasada(),
    ])
      .then(periodos => {
        const negociacoes = periodos.reduce(
          (dados, periodo) => dados.concat(periodo),
          []
        );

        return negociacoes;
      })
      .catch(erro => {
        throw new Error(erro);
      });
  }
}
