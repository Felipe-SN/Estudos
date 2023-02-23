import axios, { AxiosError } from 'axios';
import sessionTokenHelper from 'helpers/sessionTokenHelper';
import { router } from 'Routes';

const { token } = sessionTokenHelper();

const http = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
  },
});

http.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${token.get()}`;
    return config;
  },
  error => {
    console.log(new Error(`Ocorreu um erro no interceptador: ${error}`));
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        alert(`Erro de autenticação: ${error.response.data.message}`);
        router.navigate('/');
        return Promise.reject();
      }
      alert(`Erro no processo solicitado: ${error?.response?.data.message}`);
    }
    return Promise.reject(error);
  }
);

export default http;
