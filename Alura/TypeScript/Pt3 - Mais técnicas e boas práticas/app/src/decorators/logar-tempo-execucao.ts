const logarTempoExecucao = (emSegundos: boolean = false) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = 'milissegundos';
      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `Tempo de execução de ${propertyKey}: ${
          (t2 - t1) / divisor
        } ${unidade}.`
      );
      return retorno;
    };
    return descriptor;
  };
};

export default logarTempoExecucao;
