class HttpService {
  get(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
            return;
          }
          console.log(
            `Houve um erro na requisição.\nErro: Status-${xhr.status} ReadyState-${xhr.readyState}\n${xhr.responseText}`
          );
          reject(xhr.responseText);
        }
      };

      xhr.send();
    });
  }

  post(url, dado) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
          }
        }
      };
      xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
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
