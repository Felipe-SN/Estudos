import { atom } from 'recoil';

export const isLoggedState = atom<boolean>({
  key: 'isLoggedState',
  default: false,
});

export const ModalOpenState = atom<boolean>({
  key: 'ModalOpenState',
  default: false,
});
