import idHelper from 'helper/idHelper';
import { IEvento } from 'interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaEventosState } from 'state/atom';

const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();

    if (evento.inicio < hoje)
      throw new Error(
        'Eventos não podem ser agendados para datas anteriores á atual.'
      );

    evento.id = idHelper();

    setListaEventos(listaAntiga => [...listaAntiga, evento]);
  };
};

export default useAdicionarEvento;
