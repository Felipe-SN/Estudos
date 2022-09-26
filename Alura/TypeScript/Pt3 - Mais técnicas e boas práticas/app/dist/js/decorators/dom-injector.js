const domInjector = (seletor) => {
    return (target, propertyKey) => {
        console.log(`Modificando prototype de ${target.constructor.name}:\nAdicionando getter para a propriedade => ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
};
export default domInjector;
//# sourceMappingURL=dom-injector.js.map