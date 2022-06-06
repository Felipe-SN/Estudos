class NegociacoesService {
  obterNegociacaoDaSemana(cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cb(
          null,
          JSON.parse(xhr.responseText).map(
            object =>
              new Negociacao(
                new Date(object.data),
                object.quantidade,
                object.valor
              )
          )
        );
      } else {
        console.log(
          `Houve um erro na requisição. Erro: Status-${xhr.status} ReadyState-${
            xhr.readyState
          }\n${JSON.parse(xhr.responseText)}`
        );
        cb('Não foi possível obter as negociações.', null);
      }
    };

    xhr.send();
  }
}
