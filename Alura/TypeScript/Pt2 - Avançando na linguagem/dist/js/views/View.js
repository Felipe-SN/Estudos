class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
export default View;
