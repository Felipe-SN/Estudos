import sessionTokenHelper from 'helpers/sessionTokenHelper';
import { atom } from 'recoil';

const { token } = sessionTokenHelper();

export const isLoggedState = atom<boolean>({
  key: 'isLoggedState',
  default: token.get() !== null,
});

export const modalOpenState = atom<boolean>({
  key: 'modalOpenState',
  default: false,
});

export const modalSingInOpenState = atom<boolean>({
  key: 'modalSingInOpenState',
  default: false,
});
