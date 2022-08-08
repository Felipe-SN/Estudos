import { IEvento } from 'interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaEventosState } from 'state/atom';

const useAtualizarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);
  return (evento: IEvento) => {
    return setListaEventos(listaAntiga => {
      const index = listaAntiga.findIndex(
        eventoListado => eventoListado.id === evento.id
      );

      return [
        ...listaAntiga.slice(0, index),
        evento,
        ...listaAntiga.slice(index + 1),
      ];
    });
  };
};

export default useAtualizarEvento;
