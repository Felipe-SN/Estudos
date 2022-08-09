import { IEvento } from 'interfaces/IEvento';
import { IFiltroEventos } from 'interfaces/IFiltroEventos';
import { atom } from 'recoil';

export const listaEventosState = atom<IEvento[]>({
  key: 'listaEventosState',
  default: [],
});

export const filtroEventos = atom<IFiltroEventos>({
  key: 'filtroEventos',
  default: { data: null, completo: null },
});
