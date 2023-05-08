import { AxiosRequestConfig } from 'axios';
import Book from 'types/Book';
import Category from 'types/Category';
import http from 'http/instance';
import sessionTokenHelper from 'helpers/sessionTokenHelper';

export const get = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response = await http.get<T>(url, config);
  return response.data;
};

export const getHighlights = async (url: string) => {
  const response = await http.get<Book[]>(`/public/${url}`);
  return response.data;
};

export const getCategoryBySlug = async (slug: string) => {
  const response = await http.get<Category[]>('categorias', {
    params: {
      slug: slug,
    },
  });

  return response.data[0];
};

export const remove = async (url: string, id: number | string) => {
  http.delete(`${url}/${id}`);
};

export const userCalls = {
  register: async (user: NewUserProps, auxFunction: () => void) => {
    await http.post('public/registrar', user);
    alert('Usuário cadastrado com sucesso!');
    auxFunction();
  },

  login: async (user: UserProps, auxFunction: () => void) => {
    const response = await http.post('public/login', user);
    token.set(response.data.access_token);
    auxFunction();
  },
};

const { token } = sessionTokenHelper();

type NewUserProps = {
  email: string;
  senha: string;
  nome: string;
  endereco: string;
  complemento: string;
  cep: string;
};

type UserProps = {
  email: string;
  senha: string;
};
