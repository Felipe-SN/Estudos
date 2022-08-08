import { IEvento } from 'interfaces/IEvento';
import { atom } from 'recoil';

export const listaEventosState = atom<IEvento[]>({
  key: 'listaEventosState',
  default: [
    {
      descricao: 'Estudar React',
      inicio: new Date('2022-08-08T09:00'),
      fim: new Date('2022-08-08T13:00'),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: 'Estudar Recoil',
      inicio: new Date('2022-08-09T09:00'),
      fim: new Date('2022-08-09T11:00'),
      completo: false,
      id: 1642342959,
    },
  ],
});
