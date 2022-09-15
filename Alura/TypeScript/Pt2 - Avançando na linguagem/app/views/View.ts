abstract class View<T> {
  protected _elemento: HTMLElement;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this._elemento.innerHTML = template;
  }
}

export default View;
