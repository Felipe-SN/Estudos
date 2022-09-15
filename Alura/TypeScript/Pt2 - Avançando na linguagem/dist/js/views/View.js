class View {
    constructor(seletor, escapar) {
        this._escapar = false;
        const elemento = document.querySelector(seletor);
        if (escapar)
            this._escapar = escapar;
        if (elemento) {
            this._elemento = elemento;
            return;
        }
        throw Error(`Seletor ${seletor} Não existe no DOM.`);
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}
export default View;
