import Negociacoes from '../models/Negociacoes.js';

class NegociacoesView {
  private _elemento: HTMLElement;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
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
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
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

  update(model: Negociacoes): void {
    const template = this.template(model);
    console.log(template);

    this._elemento.innerHTML = template;
  }
}

export default NegociacoesView;
