import { IEvento } from 'interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaEventosState } from 'state/atom';

const useExcluirEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);

  return (evento: IEvento) =>
    setListaEventos(listaAntiga =>
      listaAntiga.filter(eventoFiltrado => eventoFiltrado.id !== evento.id)
    );
};

export default useExcluirEvento;
