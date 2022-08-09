import { IEvento } from 'interfaces/IEvento';
import { IFiltroEventos } from 'interfaces/IFiltroEventos';
import { atom } from 'recoil';
import { eventosAsync } from './hooks/seletores';

export const listaEventosState = atom<IEvento[]>({
  key: 'listaEventosState',
  default: eventosAsync,
});

export const filtroEventos = atom<IFiltroEventos>({
  key: 'filtroEventos',
  default: { data: null, completo: null },
});
