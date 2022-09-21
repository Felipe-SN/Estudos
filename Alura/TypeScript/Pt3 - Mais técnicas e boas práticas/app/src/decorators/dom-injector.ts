const domInjector = (seletor: string) => {
  return (target: any, propertyKey: string) => {
    console.log(
      `Modificando prototype de ${target.constructor.name}:\nAdicionando getter para a propriedade => ${propertyKey}`
    );
    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(
          `Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, { get: getter });
  };
};

export default domInjector;
