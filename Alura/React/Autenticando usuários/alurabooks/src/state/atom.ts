import { atom } from 'recoil';

export const isLoggedState = atom<boolean>({
  key: 'isLoggedState',
  default: false,
});

export const modalOpenState = atom<boolean>({
  key: 'modalOpenState',
  default: false,
});

export const modalSingInOpenState = atom<boolean>({
  key: 'modalSingInOpenState',
  default: false,
});
