class NegociacoesService {
  constructor() {
    this._http = new HttpService();
  }
  obterNegociacoesDaSemana() {
    const url = 'negociacoes/semana';

    return new Promise((resolve, reject) => {
      this._http
        .get(url)
        .then(negociacoes => {
          resolve(
            negociacoes.map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        })
        .catch(erro => {
          console.log(erro);
          reject(`Não foi possível importar de ${url}`);
        });
    });
  }

  obterNegociacoesDaSemanaAnterior() {
    const url = 'negociacoes/anterior';

    return new Promise((resolve, reject) => {
      this._http
        .get(url)
        .then(negociacoes => {
          resolve(
            negociacoes.map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        })
        .catch(erro => {
          console.log(erro);
          reject(`Não foi possível importar de ${url}`);
        });
    });
  }

  obterNegociacoesDaSemanaRetrasada() {
    const url = 'negociacoes/retrasada';

    return new Promise((resolve, reject) => {
      this._http
        .get(url)
        .then(negociacoes => {
          resolve(
            negociacoes.map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        })
        .catch(erro => {
          console.log(erro);
          reject(`Não foi possível importar de ${url}`);
        });
    });
  }
}

/*

Cada status (readyState) é representado através de um inteiro. Os estados possíveis são:

0: requisição ainda não iniciada.
1: conexão com o servidor estabelecida.
2: requisição recebida.
3: processando requisição.
4: requisição concluída e a resposta esta pronta.

*/
