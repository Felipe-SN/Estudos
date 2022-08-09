import { selector } from 'recoil';
import { filtroEventos, listaEventosState } from 'state/atom';

const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroEventos);
    const todosOsEventos = get(listaEventosState);

    const eventos = todosOsEventos
      .filter(evento => {
        if (!filtro.data) return true;

        const mesmoDia =
          filtro.data.toISOString().slice(0, 10) ===
          evento.inicio.toISOString().slice(0, 10);

        return mesmoDia;
      })
      .filter(evento => {
        if (filtro.completo === null) return true;

        const estadoIgual = filtro.completo === evento.completo;

        return estadoIgual;
      });

    return eventos;
  },
});

export default eventosFiltradosState;
