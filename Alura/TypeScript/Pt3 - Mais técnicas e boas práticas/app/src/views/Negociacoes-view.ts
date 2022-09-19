import escapar from '../decorators/escapar.js';
import Negociacoes from '../models/Negociacoes.js';
import View from './View.js';

class NegociacoesView extends View<Negociacoes> {
  @escapar
  protected template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>
      <tbody>
        ${model
          .lista()
          .map(negociacao => {
            return `<tr>
              <td>${this.formatarData(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
            </tr>`;
          })
          .join('')}
      </tbody>
    </table>
    `;
  }

  private formatarData(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}

export default NegociacoesView;
