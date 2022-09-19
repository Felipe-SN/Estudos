import inspect from '../decorators/inspect.js';
import logarTempoExecucao from '../decorators/logar-tempo-execucao.js';

abstract class View<T> {
  protected _elemento: HTMLElement;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this._elemento = elemento as HTMLElement;
      return;
    }
    throw Error(`Seletor ${seletor} Não existe no DOM.`);
  }

  protected abstract template(model: T): string;

  @logarTempoExecucao()
  @inspect()
  update(model: T): void {
    let template = this.template(model);

    this._elemento.innerHTML = template;
  }
}

export default View;
