class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
            return;
        }
        throw Error(`Seletor ${seletor} Não existe no DOM.`);
    }
    update(model) {
        let template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
export default View;
//# sourceMappingURL=View.js.map