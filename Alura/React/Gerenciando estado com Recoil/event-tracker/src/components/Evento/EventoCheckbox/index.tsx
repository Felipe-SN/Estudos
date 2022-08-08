import React from 'react';
import { IEvento } from 'interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaEventosState } from 'state/atom';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);

  const alterarStatus = () => {
    const eventoAlterado = { ...evento };

    eventoAlterado.completo = !eventoAlterado.completo;

    setListaEventos(listaAntiga => {
      const index = listaAntiga.findIndex(
        eventoListado => eventoListado.id === evento.id
      );

      return [
        ...listaAntiga.slice(0, index),
        eventoAlterado,
        ...listaAntiga.slice(index + 1),
      ];
    });
  };

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square',
  ];

  return <i className={estilos.join(' ')} onClick={alterarStatus}></i>;
};

export default EventoCheckbox;

