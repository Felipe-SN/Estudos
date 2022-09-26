import NegociacoesDoDia from '../interfaces/negociacao-do-dia.js';
import Negociacao from '../models/Negociacao.js';

class NegociacoesServices {
  obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => res.json())
      .then((dadosImportados: NegociacoesDoDia[]) =>
        dadosImportados.map(
          dado => new Negociacao(new Date(), dado.vezes, dado.montante)
        )
      );
  }
}

export default NegociacoesServices;
