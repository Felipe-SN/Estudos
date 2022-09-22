import Negociacao from '../models/Negociacao.js';
class NegociacoesServices {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dadosImportados) => dadosImportados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)));
    }
}
export default NegociacoesServices;
