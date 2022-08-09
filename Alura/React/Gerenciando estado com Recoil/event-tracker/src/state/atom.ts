import { IEvento } from 'interfaces/IEvento';
import { IFiltroEventos } from 'interfaces/IFiltroEventos';
import { atom } from 'recoil';

export const listaEventosState = atom<IEvento[]>({
  key: 'listaEventosState',
  default: [
    {
      descricao: 'Estudar React',
      inicio: new Date('2022-08-11T09:00'),
      fim: new Date('2022-08-11T13:00'),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: 'Estudar Recoil',
      inicio: new Date('2022-08-12T09:00'),
      fim: new Date('2022-08-12T11:00'),
      completo: false,
      id: 1642342959,
    },
  ],
});

export const filtroEventos = atom<IFiltroEventos>({
  key: 'filtroEventos',
  default: {},
});
