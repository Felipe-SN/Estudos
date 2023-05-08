import sessionTokenHelper from 'helpers/sessionTokenHelper';
import { atom } from 'recoil';
import Category from 'types/Category';

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

export const navCategoryListState = atom<boolean>({
  key: 'navCategoryListState',
  default: false,
});

export const navUserMenuState = atom<boolean>({
  key: 'navUserMenuState',
  default: false,
});

export const categoriesState = atom<Category[]>({
  key: 'categoriesState',
  default: [],
});
