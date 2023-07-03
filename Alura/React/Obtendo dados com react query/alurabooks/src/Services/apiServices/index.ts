import { AxiosRequestConfig } from 'axios';
import http from 'http/instance';
import sessionTokenHelper from 'helpers/sessionTokenHelper';

export const get = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response = await http.get<T[]>(url, config);
  if (response.data.length === 0) return null;
  return response.data[0];
};

export const getAll = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response = await http.get<T[]>(url, config);
  if (response.data.length === 0) return null;
  return response.data;
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
