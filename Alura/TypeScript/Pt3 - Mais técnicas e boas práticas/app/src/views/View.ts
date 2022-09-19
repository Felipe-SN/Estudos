import logarTempoExecucao from '../decorators/logar-tempo-execucao.js';

abstract class View<T> {
  protected _elemento: HTMLElement;
  private _escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (escapar) this._escapar = escapar;
    if (elemento) {
      this._elemento = elemento as HTMLElement;
      return;
    }
    throw Error(`Seletor ${seletor} Não existe no DOM.`);
  }

  protected abstract template(model: T): string;

  @logarTempoExecucao()
  update(model: T): void {
    let template = this.template(model);
    if (this._escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this._elemento.innerHTML = template;
  }
}

export default View;
