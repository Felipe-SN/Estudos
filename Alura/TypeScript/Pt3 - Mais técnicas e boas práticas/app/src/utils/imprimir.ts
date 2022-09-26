import Imprimivel from '../interfaces/imprimivel.js';

const imprimir = (...objetos: Imprimivel[]): void => {
  objetos.forEach(objeto => console.log(objeto.paraTexto()));
};

export default imprimir;
