import http from 'http/instance';
import sessionTokenHelper from 'helpers/sessionTokenHelper';

export default function apiService() {
  const { token } = sessionTokenHelper();

  const requestCalls = {
    get: async <T>(url: string) => {
      const response = await http.get<T>(url);
      return response.data;
    },

    delete: async (url: string, id: number) => {
      http.delete(`${url}/${id}`);
    },
  };

  const userCalls = {
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

  return { userCalls, requestCalls };
}

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
